import styled from 'styled-components';

export const ButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--accent-color, #5d2de2);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--accent-color-hover, #4920b5);
    transform: translateY(-0.125rem);
  }
  
  svg {
    transition: all 0.2s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
  
  @media screen and (max-width: 1024px) {
    padding: 0.7rem 1.2rem;
  }
  
  @media screen and (max-width: 768px) {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    
    svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }
  
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0.6rem 0;
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;
