import { Routes, Route } from 'react-router-dom';
import ProductsPage from 'pages/ProductsPage';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
