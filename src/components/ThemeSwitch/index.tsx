import { useContext } from 'react';
import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';
import { Container, SwitchInput, SwitchLabel, SwitchSlider, MoonIcon, SunIcon } from './styles';
import { FiMoon, FiSun } from 'react-icons/fi';

interface ThemeSwitchProps {
  className?: string;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { theme, setTheme } = useContext<IGlobalContext>(GlobalContext);

  function changeTheme() {
    setTheme((prevTheme) => !prevTheme);
    localStorage.setItem('theme', JSON.stringify(!theme));
  }

  return (
    <Container className={className}>
      <SwitchInput 
        type="checkbox" 
        id="theme-switch" 
        checked={theme} 
        onChange={changeTheme} 
      />
      <SwitchLabel htmlFor="theme-switch">
        <MoonIcon isActive={theme}>
          <FiMoon />
        </MoonIcon>
        <SunIcon isActive={!theme}>
          <FiSun />
        </SunIcon>
        <SwitchSlider isActive={theme} />
      </SwitchLabel>
    </Container>
  );
}
