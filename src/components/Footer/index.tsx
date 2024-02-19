import StyledFooter from './Footer';
import BackToTheTop from '@components/BackToTheTop';
import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react';

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
              <LinkedinLogo />
            </a>
            <a href="https://github.com/matheuslrd" target="_blank" rel="noreferrer">
              <GithubLogo />
            </a>
            <a
              href="https://www.instagram.com/matheuslrd_/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo color="white" />
            </a>
          </div>
        </div>

        <BackToTheTop />
      </footer>
    </StyledFooter>
  );
}

export default Footer;
