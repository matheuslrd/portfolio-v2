import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';
import { useContext, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Switch from 'react-switch';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.secundary || '#222'};  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const MenuCheckbox = styled.input`
  display: none;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  transition: all 0.3s ease;
  height: 60px;
  
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    max-height: ${({ isOpen }) => (isOpen ? '18.75rem' : '0')};
    overflow: hidden;
    transition: max-height 0.5s ease;
  }
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 0;
  }
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.color.text || '#fff'};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 3px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }
  
  &:hover:after {
    background-color: #5d2de2;
  }
  
  &:last-child:hover:after {
    background-color: transparent;
  }
  
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 15px 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    &:after {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.color.text || '#fff'};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #5d2de2;
  }
`;

const HamburgerButton = styled.label`
  display: none;
  cursor: pointer;
  padding: 10px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background: ${({ theme }) => theme.color.text || '#fff'};
  position: relative;
  
  &:before, &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.color.text || '#fff'};
    position: absolute;
    left: 0;
    transition: transform 0.3s ease;
  }
  
  &:before {
    top: -8px;
  }
  
  &:after {
    top: 8px;
  }
`;

export default function Header() {
  const { theme, setTheme } = useContext<IGlobalContext>(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function changeTheme() {
    setTheme((prevTheme) => !prevTheme);
    localStorage.setItem('theme', JSON.stringify(!theme));
  }

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
            <Switch
              activeBoxShadow="none"
              checked={theme}
              uncheckedIcon={
                <BsFillSunFill color="#fff" size="0.9em" />
              }
              checkedIcon={
                <BsFillMoonFill color="#fff" size="0.8em" />
              }
              handleDiameter={17}
              height={17}
              onChange={changeTheme}
              onColor="#888"
              width={45}
            />
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}
