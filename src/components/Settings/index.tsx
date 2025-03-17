import { useContext, useRef, useState, useEffect } from 'react';
import { FiSettings, FiLayout } from 'react-icons/fi';
import { MdAnimation, MdFormatSize } from 'react-icons/md';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext, AccentColorType, ContentDensityType } from '@context/interfaces';
import {
  Container,
  SettingsButton,
  SettingsModal,
  ModalTitle,
  OptionGroup,
  OptionLabel,
  FontSizeGroup,
  FontSizeOption,
  ColorOptionGroup,
  ColorOption,
  ToggleSwitch,
  ToggleSlider,
  ToggleContainer,
  ToggleLabel,
  DensityOptionGroup,
  DensityOption
} from './styles';

export const fontSizes = {
  small: '14px',
  medium: '16px',
  large: '18px'
};

export interface SettingsProps {
  className?: string;
}

export default function Settings({ className }: SettingsProps) {
  const { theme, fontSize: globalFontSize, setFontSize: setGlobalFontSize, 
          accentColor, setAccentColor, animationsEnabled, setAnimationsEnabled,
          contentDensity, setContentDensity } = useContext<IGlobalContext>(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState(globalFontSize);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size as keyof typeof fontSizes);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setGlobalFontSize(size as any);
    document.documentElement.style.fontSize = fontSizes[size as keyof typeof fontSizes];
    localStorage.setItem('fontSize', size);
  };

  const changeAccentColor = (color: AccentColorType) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
  };

  const toggleAnimations = () => {
    const newValue = !animationsEnabled;
    setAnimationsEnabled(newValue);
    localStorage.setItem('animationsEnabled', JSON.stringify(newValue));
  };

  const changeContentDensity = (density: ContentDensityType) => {
    setContentDensity(density);
    localStorage.setItem('contentDensity', density);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current && 
      !modalRef.current.contains(event.target as Node) && 
      buttonRef.current && 
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsModalOpen(false);
    }
  };

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    setFontSize(globalFontSize);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [globalFontSize]);



  return (
    <Container className={className}>
      <SettingsButton 
        ref={buttonRef} 
        onClick={toggleModal}
        aria-label="Configurações"
        className="settings-button"
      >
        <FiSettings />
      </SettingsButton>
      
      {isModalOpen && (
        <SettingsModal ref={modalRef} isDarkTheme={theme} className={isMobile ? 'mobile-modal' : ''}>
          <ModalTitle>Preferências</ModalTitle>
          
          <OptionGroup>
            <OptionLabel>
              <MdFormatSize size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Tamanho da fonte
            </OptionLabel>
            <FontSizeGroup>
              <FontSizeOption
                isActive={fontSize === 'small'}
                onClick={() => changeFontSize('small')}
              >
                P
              </FontSizeOption>
              <FontSizeOption 
                isActive={fontSize === 'medium'}
                onClick={() => changeFontSize('medium')}
              >
                M
              </FontSizeOption>
              <FontSizeOption
                isActive={fontSize === 'large'}
                onClick={() => changeFontSize('large')}
              >
                G
              </FontSizeOption>
            </FontSizeGroup>
          </OptionGroup>
          
          <OptionGroup>
            <OptionLabel>
              <IoColorPaletteOutline size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Cor de destaque
            </OptionLabel>
            <ColorOptionGroup>
              <ColorOption 
                isActive={accentColor === 'purple'}
                color="purple"
                onClick={() => changeAccentColor('purple')}
                aria-label="Roxo"
              />
              <ColorOption 
                isActive={accentColor === 'blue'}
                color="blue"
                onClick={() => changeAccentColor('blue')}
                aria-label="Azul"
              />
              <ColorOption 
                isActive={accentColor === 'green'}
                color="green"
                onClick={() => changeAccentColor('green')}
                aria-label="Verde"
              />
              <ColorOption 
                isActive={accentColor === 'red'}
                color="red"
                onClick={() => changeAccentColor('red')}
                aria-label="Vermelho"
              />
              <ColorOption 
                isActive={accentColor === 'orange'}
                color="orange"
                onClick={() => changeAccentColor('orange')}
                aria-label="Laranja"
              />
            </ColorOptionGroup>
          </OptionGroup>
          
          <OptionGroup>
            <OptionLabel>
              <FiLayout size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Densidade do conteúdo
            </OptionLabel>
            <DensityOptionGroup>
              <DensityOption 
                isActive={contentDensity === 'compact'}
                onClick={() => changeContentDensity('compact')}
              >
                Compacto
              </DensityOption>
              <DensityOption 
                isActive={contentDensity === 'normal'}
                onClick={() => changeContentDensity('normal')}
              >
                Normal
              </DensityOption>
              <DensityOption 
                isActive={contentDensity === 'spacious'}
                onClick={() => changeContentDensity('spacious')}
              >
                Espaçoso
              </DensityOption>
            </DensityOptionGroup>
          </OptionGroup>
          
          <OptionGroup>
            <ToggleContainer>
              <ToggleLabel>
                <MdAnimation size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                Animações
              </ToggleLabel>
              <ToggleSwitch>
                <input 
                  type="checkbox" 
                  checked={animationsEnabled} 
                  onChange={toggleAnimations} 
                />
                <ToggleSlider isOn={animationsEnabled} />
              </ToggleSwitch>
            </ToggleContainer>
          </OptionGroup>
        </SettingsModal>
      )}
    </Container>
  );
}
