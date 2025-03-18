import styled from 'styled-components';

const App = styled.div`
  background: ${(props) => props.theme.color.primary};
  transition: 0.25s all ease-out;
  font-weight: 500;
  color: ${(props) => props.theme.color.text};
  width: 100%;

  a {
    text-decoration: none;
  }

  .btn-contact {
    background: var(--accent-color, #5d2de2);
    border-radius: 0.187rem;
    color: #fdfdfd;
    height: 2.399rem;
    font-size: 0.75rem;
    font-weight: 700;
    transition: 0.2s all ease-out;
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    width: fit-content;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      filter: brightness(0.75);
    }
  }
`;

export default App;
