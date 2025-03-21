import styled from 'styled-components';
import { accentColorMap } from '../../styles/accentColors';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    .settings-button {
      position: relative;
      z-index: 1100;
    }
  }
`;

export const SettingsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  font-size: 1.25rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
  border-radius: 50%;
  
  &:hover {
    color: var(--accent-color, #5d2de2);
    transform: rotate(30deg);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 1.375rem;
  }
`;

export const SettingsModal = styled.div<{ isDarkTheme: boolean }>`
  position: absolute;
  background-color: ${({ isDarkTheme }) => 
    isDarkTheme ? '#252528' : '#f5f5f7'};
  border-radius: 0.75rem;
  box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  z-index: 1000;
  top: 2.5368rem;
  right: 0;
  animation: fadeIn 0.2s ease-out;
  border: 1px solid ${({ isDarkTheme }) => 
    isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  
  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 1.25rem;
    right: 1.25rem;
    max-width: calc(100% - 40px);
    width: auto;
    min-width: 15.625rem;
    z-index: 1200;
    max-height: 80vh;
    overflow-y: auto;
  }
  
  @media (max-width: 480px) {
    bottom: 0.625rem;
    right: 0.625rem;
    max-width: calc(100% - 20px);
    padding: 1.2rem;
  }
  
  &.mobile-modal {
    animation: fadeInUp 0.3s ease-out;
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const ModalTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.color.text};
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => 
    theme.color.text === '#fdfdfd' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)'};
  padding-bottom: 0.75rem;
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    padding-bottom: 0.6rem;
  }
`;

export const OptionGroup = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
  }
`;

export const OptionLabel = styled.div`
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.color.text};
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
    text-align: center;
  }
`;

export const FontSizeGroup = styled.div`
  display: flex;
  gap: 0.625rem;
  
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const ColorOptionGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.625rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const ColorOption = styled.button<{ color: string; isActive: boolean }>`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: ${({ color }) => accentColorMap[color]?.primary || color};
  border: 2px solid ${({ isActive, theme }) => 
    isActive 
      ? theme.color.text === '#fdfdfd' 
        ? 'rgba(255, 255, 255, 0.8)' 
        : 'rgba(0, 0, 0, 0.8)' 
      : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  margin: 0 0.125rem;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-color-light, rgba(93, 45, 226, 0.3));
  }
  
  ${({ isActive }) => isActive && `
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.875rem;
      height: 0.875rem;
      background: white;
      border-radius: 50%;
    }
  `}
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const ToggleSlider = styled.span<{ isOn: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ isOn }) => 
    isOn ? 'var(--accent-color, #5d2de2)' : 'rgba(0, 0, 0, 0.25)'};
  transition: .4s;
  border-radius: 1.5rem;
  
  &:before {
    position: absolute;
    content: "";
    height: 1.125rem;
    width: 1.125rem;
    left: 0.1875rem;
    bottom: 0.1875rem;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    transform: ${({ isOn }) => isOn ? 'translateX(24px)' : 'translateX(0)'};
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.625rem;
  }
`;

export const ToggleLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.text};
`;

export const DensityOptionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

export const DensityOption = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ isActive, theme }) => 
    isActive ? 'var(--accent-color, #5d2de2)' : theme.color.text === '#fdfdfd' 
      ? 'rgba(255, 255, 255, 0.2)' 
      : 'rgba(0, 0, 0, 0.2)'};
  background-color: ${({ isActive }) => 
    isActive ? 'var(--accent-color-light, rgba(93, 45, 226, 0.1))' : 'transparent'};
  color: ${({ isActive, theme }) => 
    isActive ? 'var(--accent-color, #5d2de2)' : theme.color.text};
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--accent-color-light, rgba(93, 45, 226, 0.1));
    border-color: var(--accent-color, #5d2de2);
    color: var(--accent-color, #5d2de2);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-color-light, rgba(93, 45, 226, 0.3));
  }
`;

export const FontSizeOption = styled.button<{ isActive: boolean }>`
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ isActive, theme }) => 
    isActive ? 'var(--accent-color, #5d2de2)' : theme.color.text === '#fdfdfd' 
      ? 'rgba(255, 255, 255, 0.2)' 
      : 'rgba(0, 0, 0, 0.2)'};
  background-color: ${({ isActive }) => 
    isActive ? 'var(--accent-color-light, rgba(93, 45, 226, 0.1))' : 'transparent'};
  color: ${({ isActive, theme }) => 
    isActive ? 'var(--accent-color, #5d2de2)' : theme.color.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  transition: all 0.2s ease;
  margin: 0 0.125rem;
  
  &:hover {
    background-color: var(--accent-color-light, rgba(93, 45, 226, 0.1));
    border-color: var(--accent-color, #5d2de2);
    color: var(--accent-color, #5d2de2);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-color-light, rgba(93, 45, 226, 0.3));
  }
`;
