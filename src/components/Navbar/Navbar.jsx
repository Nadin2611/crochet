import { NavContainer, NavItem } from './Navbar.styled';

const Navbar = () => {
  return (
    <NavContainer>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/products">Products</NavItem>
      <NavItem to="/pattern">Pattern</NavItem>
    </NavContainer>
  );
};

export default Navbar;
