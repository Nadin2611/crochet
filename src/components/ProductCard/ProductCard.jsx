import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { Navigation } from 'swiper/modules';

import {
  Card,
  PatternButton,
  ProductPrice,
  ProductTitle,
} from './ProductCard.styled';

import {
  ImageContainer,
  StyledSwiper,
  ProductImage,
} from './ProductCard.styled';

const ProductCard = ({ product, showPrice, showPattern }) => {
  if (!product) {
    return <Card>Дані про товар відсутні</Card>;
  }

  const images = Array.isArray(product.images)
    ? product.images
    : [product.image];

  return (
    <Card>
      <ImageContainer>
        {images.length > 1 ? (
          <StyledSwiper
            navigation
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <ProductImage src={img} alt={`${product.name} ${index + 1}`} />
              </SwiperSlide>
            ))}
          </StyledSwiper>
        ) : (
          <ProductImage src={images[0]} alt={product.name} />
        )}
      </ImageContainer>
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
