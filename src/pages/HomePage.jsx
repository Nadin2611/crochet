import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Головна сторінка</h1>
      <Link to="/product">Перейти до товарів</Link>
    </div>
  );
}
