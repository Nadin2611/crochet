import React from 'react';
import { useSelector } from 'react-redux';
import {
  GridContainer,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './ProductsPage.styled';

const ProductsPage = () => {
  const products = useSelector(state => state.products.items);
  console.log(products[1].image);
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);

  return (
    <GridContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />

          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>{product.price} грн</ProductPrice>
        </ProductCard>
      ))}
    </GridContainer>
  );
};

export default ProductsPage;
