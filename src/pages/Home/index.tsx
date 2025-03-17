import { lazy, Suspense } from 'react';
import { WhatsappLogo, GithubLogo } from '@phosphor-icons/react';
import devIllustration from '@assets/dev-illustration.svg';
import ContactButton from '@components/ContactButton';
import StyledHomePage from './styles/homePage';
import {
  HomePageSection,
  MainContent,
  ContactMeContainer,
  SummaryContainer,
  SummaryAboutMe,
  StudentWeb,
  ButtonsContact,
  IllustrationContainer,
  IllustrationImage,
  ArrowContainer
} from './styles/components';

const Header = lazy(() => import('../../components/Header'));

function HomePage() {
  return (
    <StyledHomePage>
      <HomePageSection id="Home-Page">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <MainContent>
          <ContactMeContainer data-aos="zoom-in">
            <SummaryContainer>

              <SummaryAboutMe
                style={{ 
                  contentVisibility: 'auto',
                  containIntrinsicSize: '0 500px'
                }}
              >
                <span>Olá, eu sou</span>
                <br />
                <h1>Matheus Laurindo</h1>
                <StudentWeb>Estudante de Desenvolvimento Web.</StudentWeb>
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
              containIntrinsicSize: '0 500px'
            }}
          >
            <IllustrationImage
              src={devIllustration}
              alt="Ilustração de um desenvolvedor programando"
              loading="lazy"
              decoding="async"
              width="500"
              height="500"
            />
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
