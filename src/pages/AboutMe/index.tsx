import StyledAboutMe from './styles/aboutMe';
import { FileHtml, FileJs, FileCss, Atom, LinkedinLogo } from '@phosphor-icons/react';

function AboutMe() {
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
                Meu nome é Matheus Laurindo, tenho 20 anos e moro em Gravataí/RS.
                <br />
                Sou apaixonado por filmes, tecnologia e praticar exercícios físicos.
              </p>
              <br />
              <p>
                Sou formado em
                <b> Tecnologia Da Informação </b>
                pela
                <i> QI Escolas e Faculdades </i>e atualmente estudo
                <b> Desenvolvimento Web </b>
                na
                <i> Trybe. </i>
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
