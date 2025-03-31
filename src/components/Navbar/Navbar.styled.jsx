import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f8f9fa;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
  padding: 8px 12px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &.active {
    color: #007bff;
  }

  &:hover {
    color: #0056b3;
    background-color: rgba(0, 123, 255, 0.1); /* Легкий підсвіт фону */
    border-radius: 5px;
  }
`;
