import styled from 'styled-components';

const Services = styled.div`
  #Services-Page {
    align-items: center;
    background: ${(props) => props.theme.color.secundary};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .Services-Title {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin: 1rem;
    width: 100%;
  }

  .Services-Container-Center {
    display: flex;
    font-size: 1rem;
    flex-flow: row nowrap;
    margin-bottom: 1rem;
    width: 80%;
  }

  .Service {
    background: ${(props) => props.theme.color.primary};
    text-align: center;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    padding: 1rem;
    margin: 1rem;
    height: 20rem;
    width: 25%;
  }

  .Icon-Service {
    color: #5429cf;
    text-align: center;
    padding: 2.2em 0;
  }

  .Title-Service {
    margin-bottom: 0.8rem;
    font-weight: 400;
  }

  .Text-Service {
    font-weight: 600;
    line-height: 1.5rem;
  }

  #Skills {
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 768px) {
    .Services-Container-Center {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: 98%;
    }

    .Service {
      font-size: 0.8rem;
      height: 19rem;
      width: 40%;
    }

    .Icon-Service {
      padding: 1.5rem;
    }

    .Text-Service {
      line-height: 1.1rem;
    }
  }
`;

export default Services;
