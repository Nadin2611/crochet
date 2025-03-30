import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Джмул великий',
      price: 300,
      image: '/images/IMG_20250316_100727.jpg',
    },
    {
      id: 2,
      name: 'Дуо',
      price: 250,
      image: '/images/IMG_20250316_100737.jpg',
    },
    {
      id: 3,
      name: 'Стильна свинка',
      price: 280,
      image: '/images/стильна_свинка.png',
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
