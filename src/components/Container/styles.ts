import styled from 'styled-components';

export const ContainerWrapper = styled.div<{ fullWidth?: boolean }>`
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '1200px')};
  margin: 0 auto;
  padding: 0 clamp(1rem, 5%, 5rem);
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;
