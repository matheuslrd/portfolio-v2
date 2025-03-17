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

  return (
    <HeaderContainer>
      <Navigation>
        <NavHeader>
          <Logo href="#">Matheus Laurindo</Logo>
          <HamburgerButton onClick={toggleMenu}>
            <HamburgerIcon />
          </HamburgerButton>
        </NavHeader>

        <NavList isOpen={isMenuOpen}>
          <NavItem>
            <NavLink href="#About-Me">Sobre Mim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Projects">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Services">Serviços</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Skills">Habilidades</NavLink>
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
