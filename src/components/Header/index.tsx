import { Link } from 'react-router-dom';
import { HeaderWrapper } from './Header.style';

export default function Header() {
  return (
    <HeaderWrapper>
      <div>logo</div>
      <nav>
        <div>switch</div>
        <Link to="/">Home</Link>
        <Link to="/about-me">AboutMe</Link>
        <Link to="/skills">Skills</Link>
      </nav>
    </HeaderWrapper>
  );
}
