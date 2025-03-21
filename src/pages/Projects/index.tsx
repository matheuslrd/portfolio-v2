import projects from '@data/projects.json';

import StyledProjects from './styles';
import ProjectCard from '../../components/ProjectCard';

function Projects() {
  return (
    <StyledProjects>
      <section id="Projects">
        <h2 className="Title-Projects" data-aos="zoom-in" data-aos-delay="0">
          Projetos
        </h2>
        <div className="Projects-Container">
          {projects.map(({ title, description, linkWebSite, linkGitHub, id }) => (
            <ProjectCard
              description={description}
              key={id}
              title={title}
              linkWebSite={linkWebSite}
              linkGitHub={linkGitHub}
            />
          ))}
        </div>
        <div className="Repositories-On-GitHub">
          <a
            href="https://github.com/matheuslrd?tab=repositories"
            className="Link-Repositories-On-GitHub"
            target="_blank"
            rel="noreferrer"
            id="Services"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            Repositórios no GitHub
          </a>
        </div>
      </section>
    </StyledProjects>
  );
}

export default Projects;
