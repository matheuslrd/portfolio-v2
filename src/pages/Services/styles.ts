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
    padding: 3rem 0;
  }

  .Services-Title {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2.5rem;
    width: 100%;
    color: ${(props) => props.theme.color.text};
  }

  .Services-Container-Center {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2rem;
    width: 90%;
    max-width: 75rem;
    margin: 0 auto 2rem auto;
  }

  .Service {
    background: ${(props) => props.theme.color.primary};
    text-align: center;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 1.5rem;
    flex: 1 0 calc(25% - 2rem);
    min-width: 15.625rem;
    box-shadow: 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 20rem;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.25rem;
      background: var(--accent-color, #5429cf);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::before {
      transform: scaleX(1);
    }
  }

  .Service:hover {
    transform: translateY(-0.625rem);
    box-shadow: 0 0.9375rem 1.875rem var(--accent-color-light);
  }

  .Icon-Service {
    color: var(--accent-color, #5429cf);
    text-align: center;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .Icon-Service svg {
    width: 3rem;
    height: 3rem;
    transition: transform 0.3s ease;
  }
  
  .Service:hover .Icon-Service svg {
    transform: scale(1.1);
  }

  .Title-Service {
    margin-bottom: 1.2rem;
    font-weight: 500;
    font-size: 1.3rem;
    color: ${(props) => props.theme.color.text};
  }

  .Text-Service {
    font-weight: 400;
    line-height: 1.6rem;
    color: ${(props) => props.theme.color.text};
    flex-grow: 1;
  }

  #Skills {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 1024px) {
    .Services-Container-Center {
      width: 95%;
      gap: 1.5rem;
    }

    .Service {
      flex: 1 0 calc(33.333% - 1.5rem);
    }
  }

  @media screen and (max-width: 768px) {
    #Services-Page {
      padding: 2rem 0;
    }

    .Services-Title {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    .Services-Container-Center {
      gap: 1rem;
      width: 90%;
    }

    .Service {
      flex: 1 0 calc(50% - 1rem);
      padding: 1.2rem;
      min-width: 12.5rem;
    }

    .Icon-Service {
      padding: 1.5rem 0;
    }

    .Icon-Service svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    .Title-Service {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .Text-Service {
      font-size: 0.9rem;
      line-height: 1.4rem;
    }
  }

  @media screen and (max-width: 480px) {
    #Services-Page {
      padding: 1.5rem 0;
    }

    .Services-Title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .Services-Container-Center {
      width: 95%;
      gap: 1rem;
    }

    .Service {
      flex: 1 0 100%;
      margin: 0 0 1rem 0;
      min-width: unset;
      padding: 1rem;
    }

    .Icon-Service {
      padding: 1rem 0;
    }

    .Icon-Service svg {
      width: 2rem;
      height: 2rem;
    }

    .Title-Service {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }

    .Text-Service {
      font-size: 0.85rem;
      line-height: 1.3rem;
    }
  }
`;

export default Services;
