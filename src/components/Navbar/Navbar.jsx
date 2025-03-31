import { NavContainer, NavItem, Logo } from './Navbar.styled';
import crochet from '../../assets/images/crochet.png';

const Navbar = () => {
  return (
    <NavContainer>
      <NavItem to="/home">
        <Logo src={crochet} alt="Logo" />
      </NavItem>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/products">Products</NavItem>
      <NavItem to="/pattern">Pattern</NavItem>
    </NavContainer>
  );
};

export default Navbar;
