import styled from 'styled-components';

const HomePage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap');

  #Home-Page {
    height: 100vh;
    padding-top: 3.625rem;
    transition: 0.25s all ease-out;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .arrow {
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
      border-bottom: 0.187rem solid #5d2de2;
      border-right: 0.187rem solid #5d2de2;
      transform: rotate(45deg);
      animation: animate 2s infinite;
    }

    span:nth-child(2) {
      animation-delay: -0.2s;
    }

    span:nth-child(3) {
      animation-delay: -0.4s;
    }
  }

  .Title-Name {
    font-family: Merienda, cursive;
    font-size: 1.2rem;
  }

  .Light-Theme-Icon {
    margin-left: 0.3rem;
    margin-top: 0.1rem;
  }

  /* CONTEÚDO PRINCIPAL */
  .Main-Content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .Main-Content .Contacte-Me-Container {
    align-items: flex-start;
    display: flex;
    justify-content: center;
    flex: 1;
    padding-right: 2rem;
  }

  .summary-container {
    max-width: 500px;
  }

  .summary-about-me {
    font-size: 1.5rem;
    line-height: 1.6;
  }

  .summary-about-me h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0.5rem 0;
    color: ${(props) => props.theme.color.text};
  }

  .summary-about-me span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.text};
  }

  .Student-Web {
    font-weight: 500;
    display: block;
    margin-top: 0.5rem;
  }

  .buttons-contact {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    margin-top: 2rem;
  }

  .btn-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #5d2de2;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 0.25rem;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background: #4920b5;
      transform: translateY(-2px);
    }
    
    svg {
      transition: all 0.2s ease;
    }
    
    &:hover svg {
      transform: scale(1.1);
    }
  }

  .Main-Content .illustration-dev-container {
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1;
  }

  .illustration-dev {
    max-width: 100%;
    height: auto;
  }

  @keyframes animate {
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
  }

  .Mouse-Seta {
    color: #5d2de2;
  }

  @media screen and (max-width: 1024px) {
    .Main-Content {
      width: 95%;
    }
    
    .summary-about-me h1 {
      font-size: 2.5rem;
    }
    
    .summary-about-me span {
      font-size: 1.3rem;
    }
    
    .btn-contact {
      padding: 0.7rem 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    #Home-Page {
      padding-top: 5rem;
    }

    .Main-Content {
      flex-direction: column;
      justify-content: center;
      padding: 0;
      width: 90%;
    }

    .Main-Content .Contacte-Me-Container {
      width: 100%;
      padding-right: 0;
      align-items: center;
      text-align: center;
      margin-bottom: 3rem;
    }

    .summary-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .summary-about-me {
      font-size: 1.3rem;
      text-align: center;
    }
    
    .summary-about-me h1 {
      font-size: 2.2rem;
    }
    
    .summary-about-me span {
      font-size: 1.2rem;
    }

    .buttons-contact {
      flex-direction: row;
      width: 100%;
      justify-content: center;
      gap: 1rem;
    }

    .btn-contact {
      padding: 0.7rem 1rem;
      font-size: 0.9rem;
      
      svg {
        width: 22px;
        height: 22px;
      }
    }

    .Main-Content .illustration-dev-container {
      display: none;
    }
  }
  
  @media screen and (max-width: 480px) {
    #Home-Page {
      padding-top: 4rem;
    }
    
    .Main-Content {
      width: 92%;
    }

    .summary-about-me h1 {
      font-size: 1.8rem;
    }
    
    .summary-about-me span {
      font-size: 1rem;
    }
    
    .Student-Web {
      margin-top: 0.3rem;
    }

    .buttons-contact {
      flex-direction: column;
      gap: 0.8rem;
    }

    .btn-contact {
      width: 100%;
      padding: 0.6rem 0;
      
      svg {
        width: 20px;
        height: 20px;
      }
    }


    
    .arrow {
      bottom: 1rem;
      
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }
`;

export default HomePage;
