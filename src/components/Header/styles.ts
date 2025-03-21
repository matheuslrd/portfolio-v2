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
    max-height: ${({ isOpen }) => (isOpen ? '25rem' : '0')};
    overflow: hidden;
    transition: max-height 0.5s ease;
    
    &::after {
      content: '';
      display: block;
      width: 100%;
      clear: both;
    }
    
    & > li:nth-last-child(2), & > li:last-child {
      float: right;
      margin-top: 10px;
    }
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
  cursor: pointer;
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
    justify-content: flex-start;
    
    &:after {
      display: none;
    }
    
    &:nth-last-child(2), &:last-child {
      display: inline-flex;
      width: auto;
      border-top: none;
      padding: 10px;
    }
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.color.text || '#fff'};
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--accent-color, #5d2de2);
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

export const HamburgerIcon = styled.span<{ isOpen?: boolean }>`
  display: block;
  width: 25px;
  height: 3px;
  background: ${({ isOpen, theme }) => isOpen ? 'transparent' : theme.color.text || '#fff'};
  position: relative;
  transition: all 0.3s ease;
  
  &::before,
  &::after {
    content: '';
    display: block;
    width: 25px;
    height: 3px;
    background: ${({ theme }) => theme.color.text || '#fff'};
    position: absolute;
    transition: transform 0.3s ease;
  }
  
  &::before {
    top: ${({ isOpen }) => isOpen ? '0' : '-8px'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }
  
  &::after {
    bottom: ${({ isOpen }) => isOpen ? '0' : '-8px'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;
