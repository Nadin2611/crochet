import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../assets/images/bee_big.jpg';
import img2 from '../../assets/images/duo.jpg';
import img3 from '../../assets/images/pig.jpg';
import img4 from '../../assets/images/bear1.jpg';
import img5 from '../../assets/images/bee.jpg';
import img6 from '../../assets/images/dino2.jpg';
import img7 from '../../assets/images/dino.jpg';
import img8 from '../../assets/images/slope.jpg';
import img9 from '../../assets/images/bunny.jpg';
import img10 from '../../assets/images/penguin.jpg';
import img11 from '../../assets/images/cat_grey.jpg';
import img12 from '../../assets/images/cat_grey_small.jpg';
import img13 from '../../assets/images/turtle.jpg';
import img14 from '../../assets/images/whale.jpg';
import img15 from '../../assets/images/capibara.jpg';
import img16 from '../../assets/images/elephant2.jpg';
import img17 from '../../assets/images/elephant.jpg';
import img18 from '../../assets/images/duck.jpg';
import img19 from '../../assets/images/duck1.jpg';
import img22 from '../../assets/images/snake.jpg';
import img23 from '../../assets/images/frog1.jpg';
import img24 from '../../assets/images/dog.jpg';
import img25 from '../../assets/images/dog2.jpg';
import img26 from '../../assets/images/octopus1.jpg';
import img27 from '../../assets/images/octopus.jpg';
import img28 from '../../assets/images/heart.jpg';
import img29 from '../../assets/images/frog.jpg';
import img30 from '../../assets/images/hedgehog.jpg';
import img32 from '../../assets/images/doll_ukr.jpg';
import img33 from '../../assets/images/doll.jpg';
import img34 from '../../assets/images/lamb.jpg';
import img35 from '../../assets/images/cat1.jpg';
import img36 from '../../assets/images/cat2.jpg';
import img37 from '../../assets/images/bebi_yoda.jpg';
import img38 from '../../assets/images/bunny_bear.jpg';
import img39 from '../../assets/images/bunny2.jpg';
import img40 from '../../assets/images/bunny3.jpg';
import img41 from '../../assets/images/bunny4.jpg';
import img42 from '../../assets/images/bunny5.jpg';
import img43 from '../../assets/images/turtle_big.jpg';
import img44 from '../../assets/images/smurf.jpg';

// const initialState = {
//   items: [
//     { id: 1, name: 'Джмул великий', price: 450, image: img1, pattern: '' },
//     { id: 2, name: 'Дуо', price: 350, image: img2, pattern: '' },
//     { id: 3, name: 'Стильна свинка', price: 450, image: img3, pattern: '' },
//     { id: 4, name: 'Ведмедик', price: 1000, image: img4, pattern: '' },
//     { id: 5, name: 'Джмулик', price: 250, image: img5, pattern: '' },
//     { id: 6, name: 'Динозаврик', price: 400, image: img6, pattern: '' },
//     { id: 7, name: 'Динозаврик великий', price: 500, image: img7, pattern: '' },
//     { id: 8, name: 'Скатеня', price: 250, image: img8, pattern: '' },
//     {
//       id: 9,
//       name: 'Зайчик в костюмі жабки',
//       price: 600,
//       image: img9,
//       pattern: '',
//     },
//     { id: 10, name: 'Пінгвінчик', price: 700, image: img10, pattern: '' },
//     { id: 11, name: 'Котики', price: 900, image: img11, pattern: '' },
//     { id: 12, name: 'Котик менший', price: 500, image: img12, pattern: '' },
//     { id: 13, name: 'Черепашки', price: 500, image: img13, pattern: '' },
//     { id: 14, name: 'Кити', price: 300, image: img14, pattern: '' },
//     { id: 15, name: 'Капібара', price: 250, image: img15, pattern: '' },
//     { id: 16, name: 'Слоник', price: 300, image: img16, pattern: '' },
//     { id: 17, name: 'Слоник великий', price: 600, image: img17, pattern: '' },
//     { id: 18, name: 'Гусь', price: 700, image: img18, pattern: '' },
//     { id: 19, name: 'Гусь менший', price: 350, image: img19, pattern: '' },
//     { id: 21, name: 'Кіт', price: 300, image: '', pattern: '' },
//     { id: 22, name: 'Змійка', price: 450, image: img22, pattern: '' },
//     { id: 23, name: 'Жаба', price: 350, image: img23, pattern: '' },
//     { id: 24, name: 'Пес-куля', price: 600, image: img24, pattern: '' },
//     { id: 25, name: 'Пес-куля менший', price: 550, image: img25, pattern: '' },
//     { id: 26, name: 'Восьминіг', price: 250, image: img26, pattern: '' },
//     {
//       id: 27,
//       name: 'Восьминіг перевернутий',
//       price: 400,
//       image: img27,
//       pattern: '',
//     },
//     { id: 28, name: 'Серце', price: 150, image: img28, pattern: '' },
//     { id: 29, name: 'Жабки', price: '***', image: img29, pattern: '' },
//     { id: 30, name: 'Їжачок', price: 350, image: img30, pattern: '' },
//     { id: 31, name: 'Донат', price: 150, image: '', pattern: '' },
//     { id: 32, name: 'Україночки', price: 1500, image: img32, pattern: '' },
//     { id: 33, name: 'Ляльки', price: 1000, image: img33, pattern: '' },
//     {
//       id: 34,
//       name: 'Баранчики великі',
//       price: 1100,
//       image: img34,
//       pattern: '',
//     },
//     { id: 35, name: 'Котики пузатики', price: 250, image: img35, pattern: '' },
//     {
//       id: 36,
//       name: 'Котик такий як брелок',
//       price: 250,
//       image: img36,
//       pattern: '',
//     },
//     { id: 37, name: 'Бейбі йода', price: 350, image: img37, pattern: '' },
//     {
//       id: 38,
//       name: 'Зайчик в комбінезоні ведмедика',
//       price: 700,
//       image: img38,
//       pattern: '',
//     },
//     {
//       id: 39,
//       name: 'Зайчик в комбінезоні малина',
//       price: 600,
//       image: img39,
//       pattern: '',
//     },
//     {
//       id: 40,
//       name: 'Зайчик в фіолетовому комбінезоні ',
//       price: 700,
//       image: img40,
//       pattern: '',
//     },
//     {
//       id: 41,
//       name: 'Зайчик з бантиками',
//       price: 550,
//       image: img41,
//       pattern: '',
//     },
//     {
//       id: 42,
//       name: 'Зайчик з навушниками',
//       price: 600,
//       image: img42,
//       pattern: '',
//     },
//   ],
// };

const initialState = {
  items: [
    // Зайчики
    {
      id: 1,
      name: 'Зайчик в костюмі жабки',
      price: 600,
      image: img9,
      pattern: '',
    },
    {
      id: 2,
      name: 'Зайчик в комбінезоні ведмедика',
      price: 700,
      image: img38,
      pattern: '',
    },
    {
      id: 3,
      name: 'Зайчик в комбінезоні малина',
      price: 600,
      image: img39,
      pattern: '',
    },
    {
      id: 4,
      name: 'Зайчик в фіолетовому комбінезоні',
      price: 700,
      image: img40,
      pattern: '',
    },
    {
      id: 5,
      name: 'Зайчик з бантиками',
      price: 550,
      image: img41,
      pattern: '',
    },
    {
      id: 6,
      name: 'Зайчик з навушниками',
      price: 600,
      image: img42,
      pattern: '',
    },

    // Котики
    { id: 7, name: 'Котики', price: 900, image: img11, pattern: '' },
    { id: 8, name: 'Котик менший', price: 500, image: img12, pattern: '' },
    { id: 9, name: 'Кіт', price: 300, image: '', pattern: '' },
    { id: 10, name: 'Котики пузатики', price: 250, image: img35, pattern: '' },
    {
      id: 11,
      name: 'Котик такий як брелок',
      price: 250,
      image: img36,
      pattern: '',
    },

    // Динозаври
    { id: 12, name: 'Динозаврик', price: 400, image: img6, pattern: '' },
    {
      id: 13,
      name: 'Динозаврик великий',
      price: 500,
      image: img7,
      pattern: '',
    },

    // Слоники
    { id: 14, name: 'Слоник', price: 300, image: img16, pattern: '' },
    { id: 15, name: 'Слоник великий', price: 600, image: img17, pattern: '' },

    // Жабки
    { id: 16, name: 'Жаба', price: 350, image: img23, pattern: '' },
    { id: 17, name: 'Жабки', price: '***', image: img29, pattern: '' },

    //Джмули
    { id: 18, name: 'Джмул великий', price: 450, image: img1, pattern: '' },
    { id: 19, name: 'Джмулик', price: 250, image: img5, pattern: '' },

    //Гусь
    { id: 20, name: 'Гусь', price: 700, image: img18, pattern: '' },
    { id: 21, name: 'Гусь менший', price: 350, image: img19, pattern: '' },

    //Собаки
    { id: 22, name: 'Пес-куля', price: 600, image: img24, pattern: '' },
    { id: 231, name: 'Пес-куля менший', price: 550, image: img25, pattern: '' },

    //  Восьминоги
    { id: 24, name: 'Восьминіг', price: 250, image: img26, pattern: '' },
    {
      id: 25,
      name: 'Восьминіг перевернутий',
      price: 400,
      image: img27,
      pattern: '',
    },

    //Черепахи
    { id: 26, name: 'Черепашки', price: 400, image: img13, pattern: '' },
    {
      id: 27,
      name: 'Велика черепаха',
      price: '***',
      image: img43,
      pattern: '',
    },

    // Інші тваринки

    { id: 28, name: 'Стильна свинка', price: 450, image: img3, pattern: '' },
    { id: 29, name: 'Ведмедик', price: 1000, image: img4, pattern: '' },
    { id: 30, name: 'Скатеня', price: 250, image: img8, pattern: '' },
    { id: 31, name: 'Пінгвінчик', price: 700, image: img10, pattern: '' },
    { id: 32, name: 'Кити', price: 300, image: img14, pattern: '' },
    { id: 33, name: 'Капібара', price: 250, image: img15, pattern: '' },
    { id: 34, name: 'Змійка', price: 450, image: img22, pattern: '' },
    { id: 35, name: 'Їжачок', price: 350, image: img30, pattern: '' },
    {
      id: 36,
      name: 'Баранчики великі',
      price: 1100,
      image: img34,
      pattern: '',
    },
    { id: 37, name: 'Бейбі йода', price: 350, image: img37, pattern: '' },

    // Ляльки
    { id: 38, name: 'Україночки', price: 1500, image: img32, pattern: '' },
    { id: 39, name: 'Ляльки', price: 1000, image: img33, pattern: '' },

    //Інші вироби
    { id: 40, name: 'Серце', price: 150, image: img28, pattern: '' },
    { id: 41, name: 'Донат', price: 150, image: '', pattern: '' },
    { id: 42, name: 'Дуо', price: 350, image: img2, pattern: '' },
    { id: 43, name: 'Смурфик', price: '***', image: img44, pattern: '' },
  ],
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
