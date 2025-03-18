import { useState } from 'react';
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

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <HeaderContainer>
      <Navigation>
        <NavHeader>
          <Logo href="#">Matheus Laurindo</Logo>
          <HamburgerButton onClick={toggleMenu}>
            <HamburgerIcon isOpen={isMenuOpen} />
          </HamburgerButton>
        </NavHeader>

        <NavList isOpen={isMenuOpen}>
          <NavItem>
            <NavLink href="#About-Me" onClick={closeMenu}>Sobre Mim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Projects" onClick={closeMenu}>Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Services" onClick={closeMenu}>Serviços</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Skills" onClick={closeMenu}>Habilidades</NavLink>
          </NavItem>
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
