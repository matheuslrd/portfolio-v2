import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';

import StyledFooter from './Footer';
import BackToTheTop from '@components/BackToTheTop';

function Footer() {
  return (
    <StyledFooter>
      <footer className="Footer">
        <div className="Footer-Icons-Container">
          <div className="Icons-Footer">
            <a
              href="https://www.linkedin.com/in/matheuslrd/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="Icon-Footer" size="1.7em" />
            </a>
            <a href="https://github.com/matheuslrd" target="_blank" rel="noreferrer">
              <FaGithub className="Icon-Footer" size="1.7em" />
            </a>
            <a
              href="https://www.instagram.com/matheuslrd_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="Icon-Footer" size="1.7em" />
            </a>
          </div>
        </div>

        <BackToTheTop />
      </footer>
    </StyledFooter>
  );
}

export default Footer;
