import { GlobalContext } from '@context/MyProvider';
import { IGlobalContext } from '@context/interfaces';
import { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

// import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import Switch from 'react-switch';

export default function HeaderLuxBar() {
  const { theme, setTheme } = useContext<IGlobalContext>(GlobalContext);

  function changeTheme() {
    setTheme((prevTheme) => !prevTheme);
    localStorage.setItem('theme', JSON.stringify(!theme));
  }

  return (
    <header id="luxbar" className="luxbar-fixed">
      <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
      <nav className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
        <ul className="luxbar-navigation">
          <li className="luxbar-header">
            <a href="#" className="luxbar-brand Title-Name">
              Matheus Laurindo
            </a>
            <label
              className="luxbar-hamburger luxbar-hamburger-spin"
              id="luxbar-hamburger"
              htmlFor="luxbar-checkbox"
            >
              {' '}
              <span className="hamburguer" />{' '}
            </label>
          </li>
          <li className="luxbar-item">
            <Switch
              activeBoxShadow="none"
              checked={theme}
              uncheckedIcon={
                <BsFillSunFill color="#fff" size="0.9em" className="Light-Theme-Icon" />
              }
              checkedIcon={
                <BsFillMoonFill color="#fff" size="0.8em" className="Light-Theme-Icon" />
              }
              className="Switch-Theme"
              handleDiameter={17}
              height={17}
              onChange={changeTheme}
              onColor="#888"
              width={45}
            />
          </li>
          <li className="luxbar-item">
            <a href="#About-Me">Sobre Mim</a>
          </li>

          <li className="luxbar-item">
            <a href="#Projects">Projetos</a>
          </li>

          <li className="luxbar-item">
            <a href="#Services">Serviços</a>
          </li>

          <li className="luxbar-item">
            <a href="#Skills">Habilidades</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
