import styled from 'styled-components';

const Experience = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  #Experience-Page {
    align-items: center;
    background: ${(props) => props.theme.color.secundary};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    transition: 0.25s all ease-out;
    width: 100%;
    padding: 6rem 0 3rem;
    flex: 1;
  }

  .Experience-Title {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2.5rem;
    width: 100%;
    color: ${(props) => props.theme.color.text};
  }

  .Experience-Container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
  }

  .Experience-Sidebar {
    flex: 0 0 250px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .Experience-Company-Button {
    text-align: left;
    padding: 1rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.color.text};
    font-size: 1rem;
    cursor: pointer;
    border-left: 3px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.color.primary};
      border-left-color: var(--accent-color-light);
    }

    &.active {
      background: ${(props) => props.theme.color.primary};
      border-left-color: var(--accent-color);
      font-weight: 500;
    }
  }

  .Experience-Content {
    flex: 1;
    background: ${(props) => props.theme.color.primary};
    border-radius: 0.5rem;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .Experience-Header {
    margin-bottom: 1.5rem;
  }

  .Experience-Role {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.color.text};
  }

  .Experience-Period {
    font-size: 1rem;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
  }

  .Experience-Description {
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.color.text};
  }

  @media screen and (max-width: 1024px) {
    .Experience-Container {
      width: 95%;
      gap: 1.5rem;
    }

    .Experience-Sidebar {
      flex: 0 0 200px;
    }
  }

  @media screen and (max-width: 768px) {
    #Experience-Page {
      padding: 2rem 0;
    }

    .Experience-Title {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    .Experience-Container {
      flex-direction: column;
      gap: 1rem;
    }

    .Experience-Sidebar {
      flex: none;
      width: 100%;
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: 0.5rem;
      
      &::-webkit-scrollbar {
        height: 4px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: var(--accent-color);
        border-radius: 2px;
      }
    }

    .Experience-Company-Button {
      flex: 0 0 auto;
      padding: 0.8rem 1.2rem;
      border-left: none;
      border-bottom: 3px solid transparent;
      white-space: nowrap;

      &:hover,
      &.active {
        border-left-color: transparent;
        border-bottom-color: var(--accent-color);
      }
    }

    .Experience-Content {
      padding: 1.5rem;
    }

    .Experience-Role {
      font-size: 1.3rem;
    }

    .Experience-Period {
      font-size: 0.9rem;
    }

    .Experience-Description {
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  @media screen and (max-width: 480px) {
    #Experience-Page {
      padding: 1.5rem 0;
    }

    .Experience-Title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .Experience-Container {
      width: 95%;
    }

    .Experience-Company-Button {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }

    .Experience-Content {
      padding: 1rem;
    }

    .Experience-Role {
      font-size: 1.2rem;
    }

    .Experience-Period {
      font-size: 0.85rem;
    }

    .Experience-Description {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`;

export default Experience;
