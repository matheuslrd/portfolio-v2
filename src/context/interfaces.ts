export type FontSizeType = 'small' | 'medium' | 'large';

export interface IGlobalContext {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: FontSizeType;
  setFontSize: React.Dispatch<React.SetStateAction<FontSizeType>>;
  setOrCreateThemeStorage: () => void;
}
