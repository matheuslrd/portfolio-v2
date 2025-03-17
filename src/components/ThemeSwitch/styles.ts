import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  
  &:focus + label {
    box-shadow: 0 0 1px 3px var(--accent-color-light);
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 60px;
  height: 30px;
  background-color: #3a3a3c;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background-color: #444446;
  }
`;

export const SwitchSlider = styled.span<{ isActive: boolean }>`
  position: absolute;
  top: 3px;
  left: ${({ isActive }) => (isActive ? 'calc(100% - 28px)' : '3px')};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(40deg, var(--accent-color, #5d2de2), var(--accent-color-light, #7350ea));
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 2px var(--accent-color-light);
  z-index: 2;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: linear-gradient(40deg, var(--accent-color-dark, #6d3df2), var(--accent-color, #8360fa));
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 2px var(--accent-color-light);
  }
`;

const IconBase = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  z-index: 1;
  color: ${({ isActive }) => (isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  transition: all 0.3s ease;
  position: relative;
  margin: 0 2px;
`;

export const MoonIcon = styled(IconBase)`
  &:before {
    content: '🌙';
    font-size: 14px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0.8)')};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  }
`;

export const SunIcon = styled(IconBase)`
  &:before {
    content: '☀️';
    font-size: 14px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0.8)')};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  }
`;
