import { AccentColorType } from '../context/interfaces';
import { accentColorMap } from './accentColors';

export const createTheme = (isDarkMode: boolean, accentColor: AccentColorType = 'purple') => ({
  color: {
    primary: isDarkMode ? '#121214' : '#f5f5f5',
    secundary: isDarkMode ? '#202024' : '#e6e6e6',
    text: isDarkMode ? '#fdfdfd' : '#111111',
  },
  accentColor,
  accent: accentColorMap[accentColor],
});

export const lightTheme = createTheme(false);
export const darkTheme = createTheme(true);
