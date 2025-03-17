export type FontSizeType = 'small' | 'medium' | 'large';
export type AccentColorType = 'purple' | 'blue' | 'green' | 'red' | 'orange';
export type ContentDensityType = 'compact' | 'normal' | 'spacious';

export interface IGlobalContext {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: FontSizeType;
  setFontSize: React.Dispatch<React.SetStateAction<FontSizeType>>;
  accentColor: AccentColorType;
  setAccentColor: React.Dispatch<React.SetStateAction<AccentColorType>>;
  animationsEnabled: boolean;
  setAnimationsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  contentDensity: ContentDensityType;
  setContentDensity: React.Dispatch<React.SetStateAction<ContentDensityType>>;
  setOrCreateThemeStorage: () => void;
}
