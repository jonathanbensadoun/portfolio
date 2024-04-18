import Logo from '../Logo/Logo';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navigation">
        <a href="">
          <li className="navigation_list">HOME</li>
        </a>
        <a href="">
          <li className="navigation_list">ABOUT</li>
        </a>
        <Logo />
        <a href="">
          <li className="navigation_list">PROJETS</li>
        </a>
        <a href="">
          <li className="navigation_list">CONTACT</li>
        </a>
      </ul>
    </div>
  );
}
