import styled from 'styled-components';

const Skills = styled.div`
  #Skills-Page {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .Skills-Container {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    width: 80%;
  }

  .Abstract-Skills {
    line-height: 1.5rem;
    padding-right: 4rem;
    width: 50%;
  }

  .Skills-Title {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  .Abstract-Skills-Text {
    font-weight: 500;
  }

  .Icons-Skills {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 2rem;
    width: 50%;
  }

  .Skill-Card {
    align-items: center;
    background: ${(props) => props.theme.color.secundary};
    border: 0.25rem solid ${(props) => props.theme.color.secundary};
    border-radius: 0.3rem;
    box-shadow: 0.125rem 0.125rem 0.312rem rgba(0, 0, 0, 0.2);
    color: #5429cf;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 1.4em 0.9rem;
    margin: 0.5rem;
    height: 7rem;
    width: 20%;
  }

  .Text-Skill {
    display: none;
    margin-top: 0.5rem;
    font-weight: 500;
  }

  .Skill-Card:hover {
    border-bottom: 0.25rem solid #5429cf;
  }

  @media screen and (max-width: 768px) {
    .Skills-Container {
      display: flex;
      flex-flow: column nowrap;
      font-size: 0.95rem;
      padding: 1rem;
      width: 98%;
    }

    .Abstract-Skills {
      padding: 0;
      width: 100%;
    }

    .Skills-Title {
      text-align: center;
      margin: 0.8rem;
    }

    .Icons-Skills {
      margin: 3rem;
      width: 100%;
    }

    .Skill-Card {
      font-size: 0.9rem;
      height: 7rem;
      width: 20%;
    }
  }
`;

export default Skills;
