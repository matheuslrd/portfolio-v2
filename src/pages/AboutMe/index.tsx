import StyledAboutMe from './styles';
import { FileHtml, FileJs, FileCss, Atom, LinkedinLogo } from '@phosphor-icons/react';

function AboutMe() {
  const calcAge = (): number => {
    const myBirth = new Date('2000-12-13');
    const today = new Date();

    return Math.floor(
      Math.ceil(Math.abs(myBirth.getTime() - today.getTime()) / (1000 * 3600 * 24)) /
        365.25,
    );
  };

  return (
    <StyledAboutMe>
      <section id="About-Me-Page">
        <section className="Avatar-Matheus" data-aos="zoom-in" data-aos-delay="0">
          <div className="Icons">
            <FileHtml size={28} weight="bold" />
            <FileJs size={28} weight="bold" />
          </div>
          <img
            className="Avatar-Matheus-Img"
            src="https://i.ibb.co/7NLrhTX/matheus-img.jpg"
            alt="Minha Figura"
            width={311}
            height={311}
          />
          <div className="Icons">
            <FileCss size={28} weight="bold" />
            <Atom size={28} weight="bold" />
          </div>
        </section>

        <article className="About-Me-Container" data-aos="zoom-in" data-aos-delay="0">
          <div className="About-Me-Center">
            <section className="Abstract-About-Me">
              <h2 className="Title-About-Me">Quem Sou Eu?</h2>
              <br />
              <p className="About-Me-Matheus">
                Meu nome é Matheus Laurindo, tenho {calcAge()} anos e moro em Gravataí/RS.
                <br />
                Sou apaixonado por filmes, tecnologia e praticar exercícios físicos.
              </p>
              <br />
              <p>
                Sou formado em
                <b> Tecnologia Da Informação </b>
                pela
                <i> QI Escolas e Faculdades </i>e<b> Desenvolvimento Web </b>
                na
                <i> Trybe. </i>
              </p>
              <br />
              <p>
                Tenho
                {` ${new Date().getFullYear() - 2021} `}+
                anos de experiência na área, onde me envolvi em inúmeros projetos com foco
                em desenvolvimento web e soluções tecnológicas inovadoras.
              </p>
            </section>

            <section className="Buttons-About-Me">
              <a
                className="btn-contact"
                href="https://www.linkedin.com/in/matheuslrd/"
                target="_blank"
              >
                <LinkedinLogo size={28} weight="bold" /> Linkedin
              </a>
            </section>
          </div>
        </article>
      </section>
    </StyledAboutMe>
  );
}

export default AboutMe;
