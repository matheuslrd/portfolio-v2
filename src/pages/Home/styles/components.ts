import styled, { keyframes } from 'styled-components';

export const HomePageSection = styled.section`
  height: 100vh;
  padding-top: 3.625rem;
  transition: 0.25s all ease-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  @media screen and (max-width: 768px) {
    padding-top: 5rem;
  }
  
  @media screen and (max-width: 480px) {
    padding-top: 4rem;
  }
`;

export const MainContent = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  
  @media screen and (max-width: 1024px) {
    width: 95%;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    width: 90%;
  }
  
  @media screen and (max-width: 480px) {
    width: 92%;
  }
`;

export const ContactMeContainer = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex: 1;
  padding-right: 2rem;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    align-items: center;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const SummaryContainer = styled.div`
  max-width: 500px;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SummaryAboutMe = styled.div`
  font-size: 1.5rem;
  line-height: 1.6;
  display: block;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0.5rem 0;
    color: ${(props) => props.theme.color.text};
    
    @media screen and (max-width: 1024px) {
      font-size: 2.5rem;
    }
    
    @media screen and (max-width: 768px) {
      font-size: 2.2rem;
    }
    
    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.text};
    
    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
    }
    
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const StudentWeb = styled.span`
  font-weight: 500;
  display: block;
  margin-top: 0.5rem;
  
  @media screen and (max-width: 480px) {
    margin-top: 0.3rem;
  }
`;

export const ButtonsContact = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  margin-top: 2rem;
  
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;



export const IllustrationContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IllustrationImage = styled.img`
  max-width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: contain;
`;

const arrowAnimation = keyframes`
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-0.625rem, -0.625rem);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: rotate(45deg) translate(0.625rem, 0.625rem);
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  z-index: 10;
  
  span {
    display: block;
    width: 0.937rem;
    height: 0.937rem;
    border-bottom: 0.187rem solid var(--accent-color, #5d2de2);
    border-right: 0.187rem solid var(--accent-color, #5d2de2);
    transform: rotate(45deg);
    animation: ${arrowAnimation} 2s infinite;
  }

  span:nth-child(2) {
    animation-delay: -0.2s;
  }

  span:nth-child(3) {
    animation-delay: -0.4s;
  }
  
  @media screen and (max-width: 480px) {
    bottom: 1rem;
    
    span {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;
