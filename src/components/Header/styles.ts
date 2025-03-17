import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.secundary || '#222'};  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Navigation = styled.nav`
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

export const NavList = styled.ul<{ isOpen: boolean }>`
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

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 0;
  }
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.color.text || '#fff'};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  position: relative;
  
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

export const NavLink = styled.a`
  color: ${({ theme }) => theme.color.text || '#fff'};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #5d2de2;
  }
`;

export const HamburgerButton = styled.label`
  display: none;
  cursor: pointer;
  padding: 10px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerIcon = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background: ${({ theme }) => theme.color.text || '#fff'};
  position: relative;
`;
