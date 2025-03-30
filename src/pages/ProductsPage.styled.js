import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 колонок */
  gap: 16px;
  padding: 16px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 160px;
  object-fit: contain;
  display: block;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;

export const ProductPrice = styled.p`
  color: gray;
`;
