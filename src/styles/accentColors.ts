import { css } from 'styled-components';

export type AccentColorValues = {
  primary: string;
  hover: string;
  light: string;
  dark: string;
};

export const accentColorMap: Record<string, AccentColorValues> = {
  purple: {
    primary: '#5d2de2',
    hover: '#4924b4',
    light: 'rgba(93, 45, 226, 0.1)',
    dark: '#3b1c91',
  },
  blue: {
    primary: '#0066ff',
    hover: '#0052cc',
    light: 'rgba(0, 102, 255, 0.1)',
    dark: '#004299',
  },
  green: {
    primary: '#2bb673',
    hover: '#22915c',
    light: 'rgba(43, 182, 115, 0.1)',
    dark: '#1b734a',
  },
  red: {
    primary: '#e53935',
    hover: '#b72c2a',
    light: 'rgba(229, 57, 53, 0.1)',
    dark: '#932421',
  },
  orange: {
    primary: '#ff8c00',
    hover: '#cc7000',
    light: 'rgba(255, 140, 0, 0.1)',
    dark: '#a35900',
  }
} as const;

export const getAccentColor = () => css`
  :root {
    --accent-color: ${({ theme }) => accentColorMap[theme.accentColor || 'purple'].primary};
    --accent-color-hover: ${({ theme }) => accentColorMap[theme.accentColor || 'purple'].hover};
    --accent-color-light: ${({ theme }) => accentColorMap[theme.accentColor || 'purple'].light};
    --accent-color-dark: ${({ theme }) => accentColorMap[theme.accentColor || 'purple'].dark};
  }
  
  [data-accent-color='purple'] {
    --accent-color: ${accentColorMap.purple.primary};
    --accent-color-hover: ${accentColorMap.purple.hover};
    --accent-color-light: ${accentColorMap.purple.light};
    --accent-color-dark: ${accentColorMap.purple.dark};
  }
  
  [data-accent-color='blue'] {
    --accent-color: ${accentColorMap.blue.primary};
    --accent-color-hover: ${accentColorMap.blue.hover};
    --accent-color-light: ${accentColorMap.blue.light};
    --accent-color-dark: ${accentColorMap.blue.dark};
  }
  
  [data-accent-color='green'] {
    --accent-color: ${accentColorMap.green.primary};
    --accent-color-hover: ${accentColorMap.green.hover};
    --accent-color-light: ${accentColorMap.green.light};
    --accent-color-dark: ${accentColorMap.green.dark};
  }
  
  [data-accent-color='red'] {
    --accent-color: ${accentColorMap.red.primary};
    --accent-color-hover: ${accentColorMap.red.hover};
    --accent-color-light: ${accentColorMap.red.light};
    --accent-color-dark: ${accentColorMap.red.dark};
  }
  
  [data-accent-color='orange'] {
    --accent-color: ${accentColorMap.orange.primary};
    --accent-color-hover: ${accentColorMap.orange.hover};
    --accent-color-light: ${accentColorMap.orange.light};
    --accent-color-dark: ${accentColorMap.orange.dark};
  }
`;

export const getContentDensityStyles = () => css`
  [data-density='compact'] {
    --content-spacing: 0.75;
  }
  
  [data-density='normal'] {
    --content-spacing: 1;
  }
  
  [data-density='spacious'] {
    --content-spacing: 1.25;
  }
`;

export const getAnimationStyles = () => css`
  .no-animations * {
    transition: none !important;
    animation: none !important;
  }
`;
