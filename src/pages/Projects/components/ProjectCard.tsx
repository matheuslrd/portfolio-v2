import { GithubLogo, Link } from '@phosphor-icons/react';

type Props = {
  title: string;
  description: string;
  linkWebSite: string;
  linkGitHub: string;
};

function ProjectCard(props: Props) {
  const { description, linkWebSite, linkGitHub, title } = props;

  return (
    <div className="Project" data-aos="zoom-in" data-aos-delay="0">
      <div className="project-info-container">
        <h3 className="Title-Project">{title}</h3>
        <p className="Abstract-Project">{description}</p>
      </div>

      <div className="Buttons-Project">
        <a className="btn-contact" href={linkWebSite} target="_blank">
          <Link size={28} weight="bold" />
          WebSite
        </a>

        <a className="btn-contact" href={linkGitHub} target="_blank">
          <GithubLogo size={28} /> GitHub
        </a>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
  linkGitHub: '',
  linkWebSite: '',
};

export default ProjectCard;
