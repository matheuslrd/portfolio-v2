/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontSizeType, AccentColorType, ContentDensityType, IGlobalContext } from './interfaces';

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(false);
  const [fontSize, setFontSize] = useState<FontSizeType>('medium');
  const [accentColor, setAccentColor] = useState<AccentColorType>('purple');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [contentDensity, setContentDensity] = useState<ContentDensityType>('normal');

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
    
    const savedAccentColor = localStorage.getItem('accentColor') as AccentColorType | null;
    if (savedAccentColor && ['purple', 'blue', 'green', 'red', 'orange'].includes(savedAccentColor)) {
      setAccentColor(savedAccentColor);
    }
    
    const savedAnimationsEnabled = localStorage.getItem('animationsEnabled');
    if (savedAnimationsEnabled !== null) {
      setAnimationsEnabled(JSON.parse(savedAnimationsEnabled));
    }
    
    const savedContentDensity = localStorage.getItem('contentDensity') as ContentDensityType | null;
    if (savedContentDensity && ['compact', 'normal', 'spacious'].includes(savedContentDensity)) {
      setContentDensity(savedContentDensity);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-density', contentDensity);
    
    document.documentElement.setAttribute('data-accent-color', accentColor);
    
    if (!animationsEnabled) {
      document.documentElement.classList.add('no-animations');
    } else {
      document.documentElement.classList.remove('no-animations');
    }
  }, [contentDensity, accentColor, animationsEnabled]);

  const context: IGlobalContext = { 
    theme, 
    setTheme, 
    fontSize,
    setFontSize,
    accentColor,
    setAccentColor,
    animationsEnabled,
    setAnimationsEnabled,
    contentDensity,
    setContentDensity,
    setOrCreateThemeStorage 
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
