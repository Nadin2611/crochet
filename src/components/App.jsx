import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from 'pages/ProductsPage';
import HomePage from 'pages/HomePage'; // Створіть цей компонент, якщо його ще немає

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crochet" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
