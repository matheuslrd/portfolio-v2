import styled from 'styled-components';

const Projects = styled.div`
  #Projects {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .Title-Projects {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    padding: 2em 0 1rem;
    width: 100%;
  }

  .Projects-Container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 83%;
  }

  .Project {
    text-align: start;
    background: ${(props) => props.theme.color.secundary};
    margin: 1rem;
    padding: 2em 1.5rem;
    font-size: 0.9rem;
    border-radius: 0.3rem;
    min-height: 15rem;
    width: 30%;

    .project-info-container {
      margin-bottom: 2rem;
    }
  }

  .Title-Project {
    font-weight: 400;
    margin-bottom: 0.5rem;
    height: 17%;
    width: 100%;
  }

  .Abstract-Project {
    font-weight: 500;
    height: 55%;
    width: 100%;
  }

  .Buttons-Project {
    display: flex;
    justify-content: space-between;
    height: 25%;
    width: 100%;

    .btn-contact {
      font-size: 0.8rem;
      height: 2.8rem;
      width: 45%;
    }
  }

  .link-btn-project {
    width: 45%;
  }

  .Btn-Project-Links:hover {
    background: #351980;
  }

  .Btn-Project-Title {
    margin-left: 0.3rem;
  }

  .Repositories-On-GitHub {
    text-align: center;
    padding: 1.28rem;
    width: 100%;
  }

  .Link-Repositories-On-GitHub {
    color: #5929cf;
    transition: 0.1s all ease-out;
  }

  .Link-Repositories-On-GitHub:hover {
    color: #754be7;
  }

  @media screen and (max-width: 768px) {
    .Projects-Container {
      display: flex;
      flex-flow: column nowrap;
      width: 98%;
    }

    .Title-Projects {
      padding-bottom: 0.5rem;
    }

    .Project {
      display: flex;
      font-size: 0.7rem;
      min-height: 0;
      height: 11rem;
      padding: 1.3rem;
      width: 95%;

      .project-info-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        flex: 6;
        text-align: justify;
        padding-right: 1rem;
        margin-bottom: 0;
      }

      .Buttons-Project {
        display: flex;
        flex-flow: column nowrap;
        flex: 4;
        justify-content: space-around;
        height: 100%;

        .btn-contact {
          height: 3.5rem;
          width: 100%;
        }
      }
    }

    .Abstract-Project {
      font-size: 0.95rem;
      height: 45%;
    }

    .Buttons-Project {
      height: 35%;
    }

    .link-btn-project {
      width: 100%;
    }

    .Btn-Project-Links {
      font-size: 0.9rem;
      height: 2.5rem;
    }
  }
`;

export default Projects;
