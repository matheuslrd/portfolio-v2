import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitch from '@components/ThemeSwitch';
import Settings from '@components/Settings';
import {
  HamburgerButton,
  HeaderContainer,
  Logo,
  NavHeader,
  Navigation,
  HamburgerIcon,
  NavItem,
  NavLink,
  NavList,
} from './styles';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  
  function closeMenu() {
    setIsMenuOpen(false);
  }

  const isHome = location.pathname === '/';

  return (
    <HeaderContainer>
      <Navigation>
        <NavHeader>
          <Logo as={Link} to="/">Matheus Laurindo</Logo>
          <HamburgerButton onClick={toggleMenu}>
            <HamburgerIcon isOpen={isMenuOpen} />
          </HamburgerButton>
        </NavHeader>

        <NavList isOpen={isMenuOpen}>
          {isHome ? (
            <>
              <NavItem>
                <NavLink as={Link} to="/experiencias" onClick={closeMenu}>Experiências</NavLink>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <NavLink as={Link} to="/" onClick={closeMenu}>Voltar</NavLink>
            </NavItem>
          )}
          <NavItem>
            <ThemeSwitch />
          </NavItem>
          <NavItem>
            <Settings />
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}
