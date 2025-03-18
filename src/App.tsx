import { lazy, Suspense, useContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import HomePage from '@pages/Home';
import Footer from '@components/Footer';
import { SEO } from '@components/SEO';
import StyledApp from '@styles/app';

import { createTheme } from '@styles/theme';
import GlobalStyle from '@styles/global';
import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';

const AboutMe = lazy(() => import('./pages/AboutMe'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Skills = lazy(() => import('./pages/Skills'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <AboutMe />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Services />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
