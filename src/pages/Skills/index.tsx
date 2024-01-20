import { FaHtml5, FaCss3Alt, FaReact, FaJs } from 'react-icons/fa';
import { SiRedux, SiJest, SiStyledcomponents, SiDocker, SiGit } from 'react-icons/si';

import StyledSkills from './styles/skills';
import SkillCard from './components/SkillCard';

function Skills() {
  return (
    <StyledSkills>
      <section id="Skills-Page">
        <div className="Skills-Container">
          <section className="Abstract-Skills" data-aos="zoom-in" data-aos-delay="100">
            <h2 className="Skills-Title"> Habilidades </h2>
            <p className="Abstract-Skills-Text">
              Conhecimentos em HTML5, CSS3, JavaScript, React, Redux, testes automatizados
              com Jest, RTL entre outras tecnologias. Além de aprimorar diariamente minhas
              softskills.
              <br />
              <br />
              Atualmente estudo o mundo do back end e aprimoro meus conhecimentos em
              UX/UI.
            </p>
          </section>

          <section className="Icons-Skills" data-aos="zoom-in" data-aos-delay="100">
            <SkillCard icon={<FaHtml5 size="3.3em" />} text="HTML5" />
            <SkillCard icon={<FaCss3Alt size="3.3em" />} text="CSS3" />
            <SkillCard icon={<FaReact size="3.3em" />} text="React" />
            <SkillCard icon={<FaJs size="3.3em" />} text="JS" />
            <SkillCard icon={<SiRedux size="3.3em" />} text="Redux" />
            <SkillCard icon={<SiJest size="3.3em" />} text="Jest" />
            <SkillCard
              icon={<SiStyledcomponents size="3.3em" />}
              text="Styled Components"
            />
            <SkillCard icon={<SiDocker size="3.3em" />} text="Docker" />
            <SkillCard icon={<SiGit size="3.3em" />} text="Git" />
          </section>
        </div>
      </section>
    </StyledSkills>
  );
}

export default Skills;
