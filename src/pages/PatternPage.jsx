import { GridContainer } from 'components/Container/GridContainer.styled';
import ProductCard from 'components/ProductCard';
import { useSelector } from 'react-redux';

const PatternPage = () => {
  const products = useSelector(state => state.products.items);

  return (
    <GridContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} showPattern={true} />
      ))}
    </GridContainer>
  );
};

export default PatternPage;
