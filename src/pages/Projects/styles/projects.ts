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
    max-width: 1200px;
    margin-bottom: 2rem;
  }

  .Project {
    text-align: start;
    background: ${(props) => props.theme.color.secundary};
    padding: 2rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    min-height: 16rem;
    flex: 1 0 calc(30% - 2rem);
    max-width: 400px;
    min-width: 280px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(84, 41, 207, 0.1);
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
      background: #5429cf;
      color: white;
      padding: 0.8rem 0;
      border-radius: 0.25rem;
      font-weight: 500;
      transition: all 0.2s ease;
      
      &:hover {
        background: #4520b0;
        transform: translateY(-2px);
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
    color: #5929cf;
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.2s all ease-out;
    padding: 0.5rem 1rem;
    border: 2px solid #5929cf;
    border-radius: 0.25rem;
    
    &:hover {
      color: white;
      background: #5929cf;
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
        width: 22px;
        height: 22px;
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
          width: 18px;
          height: 18px;
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
