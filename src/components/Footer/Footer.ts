import styled from 'styled-components';

const Footer = styled.div`
  .Footer {
    background: var(--accent-color, #5429cf);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 100%;
  }

  .Footer-Icons-Container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    width: 50%;
  }

  .Icons-Footer {
    display: flex;
    justify-content: space-around;
    margin-right: 4rem;
    width: 30%;
  }

  .Icon-Back-To-Home {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
  }

  .Back-To-Home {
    background: var(--accent-color-dark, #4622aa);
    border: 0.125rem solid var(--accent-color-dark, #4622aa);
    border-radius: 0.2rem;
    cursor: pointer;
    color: #fdfdfd;
    transition: 0.1s all ease-out;
  }

  .Icon-Footer {
    color: #fdfdfd;
    transition: 0.1s all ease-out;
  }

  .Icon-Footer:hover {
    color: var(--accent-color-contrast, #e3d42d);
  }

  .Back-To-Home:hover {
    border: 0.125rem solid var(--accent-color-darker, #351980);
    background: var(--accent-color-darker, #351980);
  }
  @media screen and (max-width: 768px) {
    .Footer-Icons-Container {
      width: 70%;
    }

    .Icons-Footer {
      margin: 0;
      width: 70%;
    }
  }
`;

export default Footer;
