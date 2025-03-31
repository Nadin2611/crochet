// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Card,
  PatternButton,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from './ProductCard.styled';

const ProductCard = ({ product, showPrice, showPattern }) => {
  if (!product) {
    return <Card>Дані про товар відсутні</Card>;
  }

  return (
    <Card>
      {product.image && <ProductImage src={product.image} alt={product.name} />}
      <ProductTitle>{product.name}</ProductTitle>
      {showPrice && <ProductPrice>{product.price} грн</ProductPrice>}
      {showPattern && (
        <PatternButton
          onClick={() => {
            if (product.pattern) {
              window.open(product.pattern, '_blank');
            }
          }}
          disabled={!product.pattern}
        >
          Переглянути схему
        </PatternButton>
      )}
    </Card>
  );
};

export default ProductCard;
