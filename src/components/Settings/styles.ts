import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const SettingsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  font-size: 20px;
  padding: 8px;
  transition: all 0.3s ease;
  border-radius: 50%;
  
  &:hover {
    color: #5d2de2;
    transform: rotate(30deg);
  }
  
  &:focus {
    outline: none;
  }
`;

export const SettingsModal = styled.div<{ isDarkTheme: boolean }>`
  position: absolute;
  width: 280px;
  background-color: ${({ isDarkTheme }) => 
    isDarkTheme ? '#252528' : '#f5f5f7'};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  z-index: 1000;
  top: 40.5885px;
  right: 13px;
  animation: fadeIn 0.2s ease-out;
  border: 1px solid ${({ isDarkTheme }) => 
    isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  
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
`;

export const OptionGroup = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const OptionLabel = styled.div`
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.color.text};
  font-weight: 500;
`;

export const FontSizeGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const FontSizeOption = styled.button<{ isActive: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid ${({ isActive, theme }) => 
    isActive ? '#5d2de2' : theme.color.text === '#fdfdfd' 
      ? 'rgba(255, 255, 255, 0.2)' 
      : 'rgba(0, 0, 0, 0.2)'};
  background-color: ${({ isActive }) => 
    isActive ? 'rgba(93, 45, 226, 0.1)' : 'transparent'};
  color: ${({ isActive, theme }) => 
    isActive ? '#5d2de2' : theme.color.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(93, 45, 226, 0.1);
    border-color: #5d2de2;
    color: #5d2de2;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(93, 45, 226, 0.3);
  }
`;
