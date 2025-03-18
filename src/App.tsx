import { useContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import HomePage from '@pages/Home';
import AboutMe from '@pages/AboutMe';
import Projects from '@pages/Projects';
import Services from '@pages/Services';
import Skills from '@pages/Skills';
import Footer from '@components/Footer';
import { SEO } from '@components/SEO';

import StyledApp from '@styles/app';

import { createTheme } from '@styles/theme';
import GlobalStyle from '@styles/global';
import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';

function App() {
  const { theme, accentColor } = useContext<IGlobalContext>(GlobalContext);

  const activeTheme = useMemo(
    () => createTheme(theme, accentColor),
    [theme, accentColor],
  );

  return (
    <ThemeProvider theme={activeTheme}>
      <StyledApp>
        <SEO />
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
