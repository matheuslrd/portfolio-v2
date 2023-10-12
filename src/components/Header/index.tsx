import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about-me">
        <button>AboutMe</button>
      </Link>
      <Link to="/skills">
        <button>Skills</button>
      </Link>
    </header>
  );
}
