const patterns = [
  {
    id: 1,
    name: 'Джміль великий',
    materials: [
      'Пряжа YarnArt Jeans (жовтий, чорний, білий)',
      'Гачок №2.5',
      'Наповнювач холлофайбер',
      'Безпечні очі 6 мм',
    ],
    symbols: [
      { symbol: 'X', meaning: 'Стовпчик без накиду' },
      { symbol: 'V', meaning: 'Додавання (2 стовпчики в 1 петлю)' },
      { symbol: 'A', meaning: 'Зменшення (2 стовпчики разом)' },
    ],
    pattern: '/patterns/big_bumblebee.pdf', // Шлях до PDF-файлу
    image: '/images/big_bumblebee.jpg', // Фото схеми
    finalImage: '/images/big_bumblebee_finished.jpg', // Готовий виріб
  },
  // Додавайте інші схеми...
];

export default patterns;
