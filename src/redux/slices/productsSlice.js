import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../assets/images/bee_big.jpg';
import img2 from '../../assets/images/duo.jpg';
import img3 from '../../assets/images/pig.jpg';
import img4 from '../../assets/images/bear1.jpg';
import img6 from '../../assets/images/dino2.jpg';
import img7 from '../../assets/images/dino.jpg';
import img8 from '../../assets/images/slope.jpg';
import img9 from '../../assets/images/bunny.jpg';
import img10 from '../../assets/images/penguin.jpg';
import img11 from '../../assets/images/cat_grey.jpg';
import img13 from '../../assets/images/turtle.jpg';
import img14 from '../../assets/images/whale.jpg';
import img16 from '../../assets/images/elephant2.jpg';
import img17 from '../../assets/images/elephant.jpg';
import img18 from '../../assets/images/duck.jpg';
import img19 from '../../assets/images/duck1.jpg';
import img24 from '../../assets/images/dog.jpg';
import img25 from '../../assets/images/dog2.jpg';
import img30 from '../../assets/images/hedgehog.jpg';
import img32 from '../../assets/images/doll_ukr.jpg';
import img34 from '../../assets/images/lamb.jpg';
import img35 from '../../assets/images/cat1.jpg';
import img37 from '../../assets/images/bebi_yoda.jpg';

const initialState = {
  items: [
    { id: 1, name: 'Джмул великий', price: 450, image: img1 },
    { id: 2, name: 'Дуо', price: 350, image: img2 },
    { id: 3, name: 'Стильна свинка', price: 450, image: img3 },
    { id: 4, name: 'Ведмедик', price: 1000, image: img4 },
    { id: 5, name: 'Джмулик', price: 250, image: '' },
    { id: 6, name: 'Динозаврик', price: 400, image: img6 },
    { id: 7, name: 'Динозаврик великий', price: 500, image: img7 },
    { id: 8, name: 'Скатеня', price: 250, image: img8 },
    { id: 9, name: 'Зайчик в костюмі жабки', price: 600, image: img9 },
    { id: 10, name: 'Пінгвінчик', price: 700, image: img10 },
    { id: 11, name: 'Котики', price: 900, image: img11 },
    { id: 12, name: 'Котик менший', price: 500, image: '' },
    { id: 13, name: 'Черепашки', price: 500, image: img13 },
    { id: 14, name: 'Кити', price: 300, image: img14 },
    { id: 15, name: 'Капібара', price: 250, image: '' },
    { id: 16, name: 'Слоник', price: 300, image: img16 },
    { id: 17, name: 'Слоник великий', price: 600, image: img17 },
    { id: 18, name: 'Гусь', price: 700, image: img18 },
    { id: 19, name: 'Гусь менший', price: 350, image: img19 },
    { id: 21, name: 'Кіт', price: 300, image: '' },
    { id: 22, name: 'Змійка', price: 450, image: '' },
    { id: 23, name: 'Жаба', price: 350, image: '' },
    { id: 24, name: 'Пес-куля', price: 600, image: img24 },
    { id: 25, name: 'Пес-куля менший', price: 550, image: img25 },
    { id: 26, name: 'Восьминіг', price: 250, image: '' },
    { id: 27, name: 'Восьминіг перевернутий', price: 400, image: '' },
    { id: 28, name: 'Серце', price: 150, image: '' },
    { id: 30, name: 'Їжачок', price: 350, image: img30 },
    { id: 31, name: 'Донат', price: 150, image: '' },
    { id: 32, name: 'Україночки', price: 1500, image: img32 },
    { id: 33, name: 'Ляльки', price: 1000, image: '' },
    { id: 34, name: 'Баранчики великі', price: 1100, image: img34 },
    { id: 35, name: 'Котики пузатики', price: 250, image: img35 },
    { id: 36, name: 'Котик такий як брелок', price: 250, image: '' },
    { id: 37, name: 'Бейбі йода', price: 350, image: img37 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
