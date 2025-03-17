/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontSizeType, IGlobalContext } from './interfaces';

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(false);
  const [fontSize, setFontSize] = useState<FontSizeType>('medium');

  function createThemeLocalStorage() {
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  function setOrCreateThemeStorage() {
    const themeStorage = JSON.parse(localStorage.getItem('theme') || 'false');

    if (!themeStorage) return createThemeLocalStorage();

    return setTheme(themeStorage);
  }

  useEffect(() => {
    setOrCreateThemeStorage();
    
    const savedFontSize = localStorage.getItem('fontSize') as FontSizeType | null;
    if (savedFontSize && ['small', 'medium', 'large'].includes(savedFontSize)) {
      setFontSize(savedFontSize);
    }
  }, []);

  const context: IGlobalContext = { 
    theme, 
    setTheme, 
    fontSize,
    setFontSize,
    setOrCreateThemeStorage 
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
