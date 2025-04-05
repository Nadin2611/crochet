import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: white;

  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  height: auto;
  max-height: 160px;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.5s ease;

  // &:hover {
  //   transform: scale(3);
  // }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;

  .swiper-button-prev,
  .swiper-button-next {
    color: #000; /* Колір стрілок */
    font-size: 12px !important;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important; /* Виправлення ширини */
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 16px; /* Менший розмір шрифта для стрілок */
  }
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: gray;
`;

export const PatternButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: blue;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: darkblue;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
