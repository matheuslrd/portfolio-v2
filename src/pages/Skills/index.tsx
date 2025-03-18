import { FaReact, FaJs, FaNode } from 'react-icons/fa';
import { SiRedux, SiJest, SiStyledcomponents, SiDocker, SiGit } from 'react-icons/si';

import StyledSkills from './styles/skills';
import SkillCard from './components/SkillCard';
import { BiLogoTypescript } from 'react-icons/bi';

function Skills() {
  return (
    <StyledSkills>
      <section id="Skills-Page">
        <div className="Skills-Container">
          <section className="Abstract-Skills" data-aos="zoom-in" data-aos-delay="100">
            <h2 className="Skills-Title"> Habilidades </h2>
            <p className="Abstract-Skills-Text">
              <b>Desenvolvedor Full-Stack</b> com sólida experiência em <b>React</b>,{' '}
              <b>Node.js</b>, <b>TypeScript</b>. Especialista em desenvolvimento de{' '}
              <i>bibliotecas JavaScript</i>, incluindo soluções de{' '}
              <b>internacionalização (i18n)</b>e <b>Design Systems</b>. Experiência com{' '}
              <i>APIs REST</i>, <i>Docker</i>, micro serviços e{' '}
              <b>integrações com IA</b>.
              <br />
              <br />
              Forte atuação em <i>automação de processos</i> com ESLint e Prettier,
              implementação de <b>observabilidade</b>{' '}
              com Sentry, e desenvolvimento de <b>interfaces responsivas</b> para
              múltiplos dispositivos. Habilidades complementares em{' '}
              <i>prototipação com Figma</i> e <i>documentação de projetos</i>.
            </p>
          </section>

          <section className="Icons-Skills" data-aos="zoom-in" data-aos-delay="100">
            <SkillCard icon={<FaReact size="3.3em" />} text="React" />
            <SkillCard icon={<FaJs size="3.3em" />} text="JS" />
            <SkillCard icon={<BiLogoTypescript size="3.3rem" />} text="TS" />
            <SkillCard icon={<SiRedux size="3.3em" />} text="Redux" />
            <SkillCard icon={<FaNode size="3.3rem" />} text="Node" />
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
