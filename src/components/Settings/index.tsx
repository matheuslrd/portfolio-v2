import { useContext, useRef, useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';
import {
  Container,
  SettingsButton,
  SettingsModal,
  ModalTitle,
  OptionGroup,
  OptionLabel,
  FontSizeGroup,
  FontSizeOption
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
  const { theme } = useContext<IGlobalContext>(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    document.documentElement.style.fontSize = fontSizes[size as keyof typeof fontSizes];
    localStorage.setItem('fontSize', size);
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
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      setFontSize(savedFontSize);
      document.documentElement.style.fontSize = fontSizes[savedFontSize as keyof typeof fontSizes];
    }

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



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
            <OptionLabel>Tamanho da fonte</OptionLabel>
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
        </SettingsModal>
      )}
    </Container>
  );
}
