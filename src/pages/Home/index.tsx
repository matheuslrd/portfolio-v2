import { lazy, Suspense, useContext } from 'react';
import { WhatsappLogo, GithubLogo } from '@phosphor-icons/react';
import { SEO } from '@components/SEO';
import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';
import {
  HomePageSection,
  MainContent,
  ContactMeContainer,
  SummaryContainer,
  SummaryAboutMe,
  StudentWeb,
  ButtonsContact,
  IllustrationContainer,
  ArrowContainer,
  StyledHomePage,
} from './styles';
import ContactButton from '@components/ContactButton';

const Header = lazy(() => import('../../components/Header'));
const DevIllustration = lazy(() => import('../../components/DevIllustration'));

function HomePage() {
  const { accentColor } = useContext<IGlobalContext>(GlobalContext);

  return (
    <StyledHomePage>
      <SEO
        title="Matheus Laurindo - Desenvolvedor Full Stack | Página Inicial"
        description="Olá, sou Matheus Laurindo, Desenvolvedor Full Stack especializado em ReactJS e Node.js. Conheça meu trabalho e projetos de desenvolvimento web."
        keywords="desenvolvedor web, full stack, React, Node.js, JavaScript, TypeScript, portfólio, Matheus Laurindo"
      />
      <HomePageSection id="Home-Page">
        <Header />
        <MainContent>
          <ContactMeContainer data-aos="zoom-in">
            <SummaryContainer>
              <SummaryAboutMe
                style={{
                  contentVisibility: 'auto',
                  containIntrinsicSize: '0 31.25rem',
                }}
              >
                <span>Olá, eu sou</span>
                <br />
                <h1>Matheus Laurindo</h1>
                <StudentWeb>Desenvolvedor Web Fullstack - React e Node.</StudentWeb>
              </SummaryAboutMe>

              <ButtonsContact>
                <ContactButton
                  href="https://wa.me/+5551984108411?text=Ol%C3%A1,%20Matheus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={28} />
                  whatsapp
                </ContactButton>

                <ContactButton
                  href="https://github.com/matheuslrd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo size={28} />
                  GitHub
                </ContactButton>
              </ButtonsContact>
            </SummaryContainer>
          </ContactMeContainer>

          <IllustrationContainer
            data-aos="zoom-in"
            style={{
              contentVisibility: 'auto',
              containIntrinsicSize: '0 500px',
            }}
          >
            <Suspense fallback={<div aria-hidden="true">Loading...</div>}>
              <DevIllustration color={accentColor} />
            </Suspense>
          </IllustrationContainer>
        </MainContent>
        <a href="#About-Me">
          <ArrowContainer id="About-Me">
            <span />
            <span />
            <span />
          </ArrowContainer>
        </a>
      </HomePageSection>
    </StyledHomePage>
  );
}

export default HomePage;
