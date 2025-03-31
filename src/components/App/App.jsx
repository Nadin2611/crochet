import { Routes, Route } from 'react-router-dom';
import ProductsPage from 'pages/ProductsPage';
import HomePage from 'pages/HomePage';
import Navbar from 'components/Navbar';
import PatternPage from 'pages/PatternPage';
import WelcomePage from 'pages/WelcomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pattern" element={<PatternPage />} />
      </Routes>
    </>
  );
}

export default App;
