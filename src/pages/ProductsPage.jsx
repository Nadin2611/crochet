import { GridContainer } from 'components/Container/GridContainer.styled';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { useSelector } from 'react-redux';

const ProductsPage = () => {
  const products = useSelector(state => state.products.items);

  return (
    <GridContainer>
      {products.map(product => {
        return (
          <ProductCard key={product.id} product={product} showPrice={true} />
        );
      })}
    </GridContainer>
  );
};

export default ProductsPage;
