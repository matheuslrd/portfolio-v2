import styled from 'styled-components';

const Projects = styled.div`
  #Projects {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    transition: 0.25s all ease-out;
    width: 100%;
    padding: 2rem 0 4rem;
  }

  .Title-Projects {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0 2rem;
    width: 100%;
    color: ${(props) => props.theme.color.text};
  }

  .Projects-Container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2rem;
    width: 90%;
    max-width: 75rem;
    margin-bottom: 2rem;
  }

  .Project {
    text-align: start;
    background: ${(props) => props.theme.color.secundary};
    padding: 2rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.05);
    min-height: 16rem;
    flex: 1 0 calc(30% - 2rem);
    max-width: 25rem;
    min-width: 17.5rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-0.3125rem);
      box-shadow: 0 0.9375rem 1.875rem var(--accent-color-light);
    }
    
    .project-info-container {
      margin-bottom: 2rem;
    }
  }

  .Title-Project {
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    width: 100%;
    color: ${(props) => props.theme.color.text};
  }

  .Abstract-Project {
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme.color.text};
    width: 100%;
  }

  .Buttons-Project {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;

    .btn-contact {
      width: 48%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: var(--accent-color, #5429cf);
      color: white;
      padding: 0.8rem 0;
      border-radius: 0.25rem;
      font-weight: 500;
      transition: all 0.2s ease;
      
      &:hover {
        filter: brightness(0.9);
        transform: translateY(-0.125rem);
      }
      
      svg {
        transition: all 0.2s ease;
      }
      
      &:hover svg {
        transform: scale(1.1);
      }
    }
  }

  .Repositories-On-GitHub {
    text-align: center;
    padding: 2rem;
    width: 100%;
  }

  .Link-Repositories-On-GitHub {
    color: var(--accent-color, #5929cf);
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.2s all ease-out;
    padding: 0.5rem 1rem;
    border: 0.125rem solid var(--accent-color, #5929cf);
    border-radius: 0.25rem;
    
    &:hover {
      color: white;
      background: var(--accent-color, #5929cf);
    }
  }

  @media screen and (max-width: 1024px) {
    .Projects-Container {
      width: 95%;
      gap: 1.5rem;
    }
    
    .Project {
      flex: 1 0 calc(45% - 1.5rem);
      padding: 1.8rem;
    }
    
    .Title-Project {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    #Projects {
      padding: 1.5rem 0 3rem;
    }
    
    .Title-Projects {
      font-size: 1.8rem;
      padding: 1.5rem 0;
    }
    
    .Projects-Container {
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 1.5rem;
    }

    .Project {
      flex: 0 0 100%;
      max-width: 100%;
      min-height: auto;
      padding: 1.5rem;
    }
    
    .Title-Project {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }
    
    .Abstract-Project {
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    .Buttons-Project .btn-contact {
      padding: 0.7rem 0;
      font-size: 0.9rem;
      
      svg {
        width: 1.375rem;
        height: 1.375rem;
      }
    }
  }

  @media screen and (max-width: 480px) {
    #Projects {
      padding: 1rem 0 2rem;
    }
    
    .Title-Projects {
      font-size: 1.5rem;
      padding: 1rem 0;
    }
    
    .Projects-Container {
      width: 92%;
      gap: 1rem;
    }

    .Project {
      padding: 1.2rem;
    }
    
    .project-info-container {
      margin-bottom: 1.5rem;
    }
    
    .Title-Project {
      font-size: 1.1rem;
      margin-bottom: 0.6rem;
    }
    
    .Abstract-Project {
      font-size: 0.85rem;
      line-height: 1.4;
    }
    
    .Buttons-Project {
      flex-direction: column;
      gap: 0.8rem;
      
      .btn-contact {
        width: 100%;
        padding: 0.6rem 0;
        font-size: 0.85rem;
        
        svg {
          width: 1.125rem;
          height: 1.125rem;
        }
      }
    }
    
    .Link-Repositories-On-GitHub {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;

export default Projects;
