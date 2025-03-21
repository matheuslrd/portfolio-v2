import styled from 'styled-components';

const AboutMe = styled.div`
  #About-Me-Page {
    background: ${(props) => props.theme.color.secundary};
    display: flex;
    flex-flow: row nowrap;
    padding: 3em 0;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .Avatar-Matheus {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: var(--accent-color, #5d2de2);
    width: 50%;
  }

  .Avatar-Matheus-Img {
    border: 0.187rem solid var(--accent-color, #5d2de2);
    border-radius: 50%;
    width: 40%;
    height: auto;
  }

  .Icons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 100%;
    color: var(--accent-color, #5d2de2);
  }

  .About-Me-Container {
    display: flex;
    align-items: center;
    width: 50%;
  }

  .About-Me-Center {
    width: 85%;
  }

  .Abstract-About-Me {
    text-align: start;

    h2 {
      font-weight: 500;
    }

    p {
      font-weight: 400;
      line-height: 1.5rem;
    }
  }

  .btn-contact {
    margin-top: 3rem;
    padding: 2em 0;
    width: 30%;
    color: #fdfdfd;
    background: var(--accent-color, #5d2de2);
    border-radius: 0.187rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 0.875rem;
    transition: all 0.3s ease;
    
    &:hover {
      filter: brightness(1.1);
      transform: translateY(-0.125rem);
    }
  }

  @media screen and (max-width: 768px) {
    #About-Me-Page {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
    }

    .Avatar-Matheus {
      padding: 0 0 2em 0;
      width: 100%;
    }

    .Avatar-Matheus-Img {
      width: 10rem;
    }

    .Icons {
      display: none;
    }

    .About-Me-Container {
      width: 85%;
    }

    .About-Me-Center {
      width: 100%;
    }

    .Buttons-About-Me {
      .btn-contact {
        width: 100%;
      }
    }
  }
`;

export default AboutMe;
