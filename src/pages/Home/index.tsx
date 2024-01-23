import HeaderLuxBar from './components/HeaderLuxBar';
import devIllustration from '@assets/dev-illustration.svg';

import StyledHomePage from './styles/homePage';
import { WhatsappLogo, GithubLogo } from '@phosphor-icons/react';

function HomePage() {
  return (
    <StyledHomePage>
      <section id="Home-Page">
        <HeaderLuxBar />
        <main className="Main-Content">
          <section className="Contacte-Me-Container" data-aos="zoom-in">
            <div className="summary-container">
              <div className="summary-about-me">
                Olá, eu sou
                <br />
                <h2>Matheus Laurindo</h2>
                <span className="Student-Web">Estudante de Desenvolvimento Web.</span>
              </div>

              <div className="buttons-contact">
                <a
                  className="btn-contact"
                  href="https://wa.me/+5551984108411?text=Ol%C3%A1,%20Matheus"
                  target="_blank"
                >
                  <WhatsappLogo size={28} />
                  whatsapp
                </a>

                <a
                  className="btn-contact btn-github"
                  href="https://github.com/matheuslrd"
                  target="_blank"
                >
                  <GithubLogo size={28} />
                  GitHub
                </a>
              </div>
            </div>
          </section>

          <section className="illustration-dev-container" data-aos="zoom-in">
            <img
              className="illustration-dev"
              src={devIllustration}
              alt="dev-illustration"
            />
          </section>
        </main>
        <a href="#About-Me">
          <div className="arrow" id="About-Me">
            <span />
            <span />
            <span />
          </div>
        </a>
      </section>
    </StyledHomePage>
  );
}

export default HomePage;
