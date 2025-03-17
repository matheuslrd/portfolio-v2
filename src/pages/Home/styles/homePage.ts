import styled from 'styled-components';

const HomePage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap');

  #Home-Page {
    height: 100vh;
    padding-top: 3.625rem;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .arrow {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);

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
    justify-content: space-around;
    height: 75%;
    width: 100%;
  }

  .Main-Content .Contacte-Me-Container {
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 53;
  }

  .buttons-contact {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.312rem;
    margin-top: 1rem;
  }

  .summary-about-me {
    font-size: 1.5rem;
  }

  .Student-Web {
    font-weight: 500;
  }

  .Main-Content .illustration-dev-container {
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 47;
  }

  .illustration-dev {
    width: 70%;
  }

  .Scrool-Text {
    margin-bottom: 0.5rem;
    margin-top: -1rem;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-1.25rem, -1.25rem);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: rotate(45deg) translate(1.25rem, 1.25rem);
    }
  }

  .Mouse-Seta {
    color: #5d2de2;
  }

  @media screen and (max-width: 768px) {
    #Home-Page {
      padding-top: 8%;
    }

    .Header {
      display: none;
    }

    .Main-Content {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      height: 78%;
      justify-content: space-evenly;
    }

    .Main-Content .Contacte-Me-Container {
      height: 30%;
      text-align: center;
      width: 80%;

      .summary-container {
        margin-top: 5rem;
      }
    }

    .btn-contact {
      margin-top: 1rem;
      width: 100%;
    }

    .Main-Content .illustration-dev-container {
      display: none;
    }

    .Btn-Contact {
      height: 3rem;
    }
  }
`;

export default HomePage;
