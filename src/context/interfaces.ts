export interface IGlobalContext {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  setOrCreateThemeStorage: () => void;
}
