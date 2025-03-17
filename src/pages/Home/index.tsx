import { lazy, Suspense } from 'react';
import { WhatsappLogo, GithubLogo } from '@phosphor-icons/react';
import devIllustration from '@assets/dev-illustration.svg';
import StyledHomePage from './styles/homePage';

const Header = lazy(() => import('../../components/Header'));

function HomePage() {
  return (
    <StyledHomePage>
      <section id="Home-Page">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <main className="Main-Content">
          <section className="Contacte-Me-Container" data-aos="zoom-in">
            <div className="summary-container">

              <div 
                className="summary-about-me"
                style={{ 
                  display: 'block',
                  contentVisibility: 'auto',
                  containIntrinsicSize: '0 500px'
                }}
              >
                <span>Olá, eu sou</span>
                <br />
                <h1>Matheus Laurindo</h1>
                <span className="Student-Web">Estudante de Desenvolvimento Web.</span>
              </div>

              <div className="buttons-contact">
                <a
                  className="btn-contact"
                  href="https://wa.me/+5551984108411?text=Ol%C3%A1,%20Matheus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={28} />
                  whatsapp
                </a>

                <a
                  className="btn-contact btn-github"
                  href="https://github.com/matheuslrd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo size={28} />
                  GitHub
                </a>
              </div>
            </div>
          </section>

          <section 
            className="illustration-dev-container" 
            data-aos="zoom-in"
            style={{ 
              contentVisibility: 'auto',
              containIntrinsicSize: '0 500px'
            }}
          >
            <img
              className="illustration-dev"
              src={devIllustration}
              alt="Ilustração de um desenvolvedor programando"
              loading="lazy"
              decoding="async"
              width="500"
              height="500"
              style={{
                aspectRatio: '1/1',
                objectFit: 'contain'
              }}
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
