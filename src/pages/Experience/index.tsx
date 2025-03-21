import { useState } from 'react';
import { SEO } from '@components/SEO';
import { BriefcaseMetal, Buildings, Calendar } from '@phosphor-icons/react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import StyledExperience from './styles';

const experiences = [
  {
    id: 'innovasfera',
    company: 'InnovaSfera',
    role: 'UX Designer & Desenvolvedor Frontend',
    period: 'Maio 2024 - No momento (1 ano)',
    description: 'Trabalhei na InnovaSfera, onde tive a oportunidade de participar de vários projetos para diversos clientes. Nessa trajetória, trabalhei em várias criações de sites, sistemas e interfaces web e mobile com a equipe de tecnologia da empresa. A InnovaSfera é referência em qualidade e inovação em suas soluções tecnológicas, seja em desenvolvimento ou infraestrutura.',
    icon: <BriefcaseMetal size={28} weight="bold" />
  },
  {
    id: 'codelab',
    company: 'CodeLab Studio',
    role: 'Desenvolvedor Full Stack',
    period: 'Janeiro 2023 - Abril 2024 (1 ano e 4 meses)',
    description: 'Atuei como desenvolvedor full stack em projetos de e-commerce e sistemas de gestão, utilizando React, Node.js e TypeScript. Implementei soluções responsivas e otimizadas para melhorar a experiência do usuário e o desempenho das aplicações.',
    icon: <Buildings size={28} weight="bold" />
  },
  {
    id: 'digitalhouse',
    company: 'Digital House',
    role: 'Instrutor de Desenvolvimento Web',
    period: 'Março 2022 - Dezembro 2022 (10 meses)',
    description: 'Ministrei aulas de desenvolvimento web para turmas de formação full stack, abordando HTML, CSS, JavaScript, React e Node.js. Orientei alunos em projetos práticos e participei da elaboração de material didático.',
    icon: <Calendar size={28} weight="bold" />
  },
  {
    id: 'zuplae',
    company: 'Zuplae',
    role: 'Desenvolvedor Frontend',
    period: 'Julho 2021 - Fevereiro 2022 (8 meses)',
    description: 'Desenvolvi interfaces de usuário responsivas e acessíveis utilizando React e Styled Components. Trabalhei em equipe utilizando metodologias ágeis e participei de code reviews para garantir a qualidade do código.',
    icon: <BriefcaseMetal size={28} weight="bold" />
  },
  {
    id: 'contiweb',
    company: 'ContiWeb',
    role: 'Desenvolvedor Web Junior',
    period: 'Janeiro 2021 - Junho 2021 (6 meses)',
    description: 'Iniciei minha carreira profissional desenvolvendo websites e landing pages com HTML, CSS e JavaScript. Aprendi sobre SEO e boas práticas de desenvolvimento web.',
    icon: <Buildings size={28} weight="bold" />
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
