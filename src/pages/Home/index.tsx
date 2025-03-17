import { lazy, Suspense, useContext } from 'react';
import { WhatsappLogo, GithubLogo } from '@phosphor-icons/react';
import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';
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
  ArrowContainer
} from './styles/components';
import ContactButton from '@components/ContactButton';
import { DevIllustration } from '@components/DevIllustration';

const Header = lazy(() => import('../../components/Header'));

function HomePage() {
  const { accentColor } = useContext<IGlobalContext>(GlobalContext);

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
            <DevIllustration color={accentColor} />
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
