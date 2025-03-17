import styled from 'styled-components';

const Skills = styled.div`
  #Skills-Page {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    transition: 0.25s all ease-out;
    width: 100%;
    padding: 2rem 0;
  }

  .Skills-Container {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .Abstract-Skills {
    line-height: 1.6rem;
    padding-right: 4rem;
    width: 50%;
  }

  .Skills-Title {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.color.text};
  }

  .Abstract-Skills-Text {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.color.text};
  }

  .Icons-Skills {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 1rem;
    width: 50%;
    gap: 1rem;
  }

  .Skill-Card {
    align-items: center;
    background: ${(props) => props.theme.color.secundary};
    border: 0.25rem solid ${(props) => props.theme.color.secundary};
    border-radius: 0.5rem;
    box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
    color: var(--accent-color, #5429cf);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 1.2rem 0.8rem;
    margin: 0.5rem;
    height: 7rem;
    min-width: 7rem;
    flex: 1 0 calc(30% - 1rem);
    transition: all 0.3s ease;
  }

  .Text-Skill {
    margin-top: 0.8rem;
    font-weight: 500;
    font-size: 0.9rem;
    text-align: center;
    color: ${(props) => props.theme.color.text};
  }

  .Skill-Card:hover {
    border-bottom: 0.25rem solid var(--accent-color, #5429cf);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 1024px) {
    .Skills-Container {
      width: 95%;
    }
    
    .Abstract-Skills {
      padding-right: 2rem;
    }
    
    .Skill-Card {
      flex: 1 0 calc(33.333% - 1rem);
    }
  }

  @media screen and (max-width: 768px) {
    .Skills-Container {
      flex-flow: column nowrap;
      padding: 1rem;
      width: 90%;
    }

    .Abstract-Skills {
      padding: 0;
      width: 100%;
      margin-bottom: 2rem;
    }

    .Skills-Title {
      text-align: center;
      margin: 1rem 0;
    }

    .Icons-Skills {
      margin: 1rem 0;
      width: 100%;
    }

    .Skill-Card {
      flex: 1 0 calc(33.333% - 1rem);
      height: 6.5rem;
      padding: 1rem 0.5rem;
    }
    
    .Text-Skill {
      font-size: 0.8rem;
    }
  }
  
  @media screen and (max-width: 480px) {
    #Skills-Page {
      padding: 1rem 0;
    }
    
    .Skills-Container {
      width: 95%;
    }
    
    .Skills-Title {
      font-size: 1.5rem;
    }
    
    .Abstract-Skills-Text {
      font-size: 0.9rem;
      line-height: 1.4rem;
    }
    
    .Icons-Skills {
      gap: 0.5rem;
    }
    
    .Skill-Card {
      flex: 1 0 calc(50% - 1rem);
      height: 5.5rem;
      min-width: 5.5rem;
      margin: 0.25rem;
    }
  }
`;

export default Skills;
