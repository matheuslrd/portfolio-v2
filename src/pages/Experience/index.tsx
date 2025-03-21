import { useState } from 'react';
import { SEO } from '@components/SEO';
import { BriefcaseMetal, Buildings, Calendar } from '@phosphor-icons/react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import StyledExperience from './styles';

const experiences = [
  {
    id: 'compliance-station',
    company: 'Compliance Station',
    role: 'Desenvolvedor Web Full-Stack',
    period: 'Março 2022 - Atual',
    description: 'Idealização e implementação de bibliotecas JavaScript, incluindo uma dedicada à internacionalização (i18n) e outra ao Design System interno. Desenvolvimento de um Chatbot integrando com I.A através da Amazon Bedrock em Node e React. Análise e elaboração de arquitetura de software para sistemas web. Implementação de responsividade, utilização de micro serviços e Docker. Responsável pela implementação de ESLint, Prettier, Sentry e TypeScript nos projetos.',
    icon: <BriefcaseMetal size={28} weight="bold" />
  },
  {
    id: 'silex',
    company: 'Silex Payments',
    role: 'Desenvolvedor Front-End (Freelance)',
    period: 'Novembro 2021 - Março 2022 (5 meses)',
    description: 'Responsável por desenvolver e revisar o front-end da empresa. Criação de protótipos de design do projeto no Figma. Desenvolvimento de interfaces utilizando React, Styled Components e TypeScript.',
    icon: <Buildings size={28} weight="bold" />
  },
  {
    id: 'trybe',
    company: 'Trybe',
    role: 'Formação em Desenvolvimento Web Full Stack',
    period: 'Concluído',
    description: 'Formação intensiva em desenvolvimento web, abrangendo front-end com React, back-end com Node.js, banco de dados, metodologias ágeis e habilidades comportamentais (soft skills).',
    icon: <Calendar size={28} weight="bold" />
  },
  {
    id: 'qi',
    company: 'QI Escolas e Faculdades',
    role: 'Curso Técnico em Informática',
    period: 'Concluído',
    description: 'Formação técnica em informática, abrangendo fundamentos de programação, desenvolvimento web básico e manutenção de computadores.',
    icon: <Calendar size={28} weight="bold" />
  }
];

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <StyledExperience>
      <SEO 
        title="Matheus Laurindo - Desenvolvedor Full Stack | Experiências"
        description="Conheça minha trajetória profissional como desenvolvedor web full stack, incluindo projetos e empresas onde trabalhei."
        keywords="experiência profissional, desenvolvedor web, full stack, react, node.js, typescript, javascript, matheus laurindo"
      />
      <Header />
      <section id="Experience-Page">
        <h1 className="Experience-Title" data-aos="zoom-in" data-aos-delay="50">
          Experiências
        </h1>
        <div className="Experience-Container">
          <div className="Experience-Sidebar" data-aos="fade-right">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`Experience-Company-Button ${selectedExperience.id === exp.id ? 'active' : ''}`}
                onClick={() => setSelectedExperience(exp)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <div className="Experience-Content" data-aos="fade-left">
            <div className="Experience-Header">
              <h3 className="Experience-Role">{selectedExperience.role}</h3>
              <div className="Experience-Period">{selectedExperience.period}</div>
            </div>
            <p className="Experience-Description">{selectedExperience.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </StyledExperience>
  );
}

export default Experience;
