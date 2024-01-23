import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from '@pages/Home';
import AboutMe from '@pages/AboutMe';
import Projects from '@pages/Projects';
import Services from '@pages/Services';
import Skills from '@pages/Skills';
import Footer from '@components/Footer';

import StyledApp from '@styles/app';

import { darkTheme, lightTheme } from '@styles/theme';
import GlobalStyle from '@styles/global';
import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';

function App() {
  const { theme } = useContext<IGlobalContext>(GlobalContext);
  AOS.init();

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <StyledApp>
        <GlobalStyle />
        <HomePage />
        <AboutMe />
        <Projects />
        <Services />
        <Skills />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
