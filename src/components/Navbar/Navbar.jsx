import Logo from '../Logo/Logo';
import './Navbar.scss';
import scrollUtils from '../../utils/scrollAnimation';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-black bg-opacity-40 shadow-md">
      <ul className="flex justify-between items-center p-4 md:px-8">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? '' : '')}
          onClick={scrollUtils.scrollToTop}
        >
          <li
            className={
              'navigation_list animate-opacity md:text-2xl text-sm text-black-shadow '
            }
          >
            HOME
          </li>
        </NavLink>
        <NavLink to="/" onClick={scrollUtils.scrollToProjects}>
          <li
            className={
              'navigation_list animate-opacity md:text-2xl text-sm text-black-shadow '
            }
          >
            PROJETS
          </li>
        </NavLink>
        <Logo />
        <button>
          <li className="navigation_list animate-opacity md:text-2xl text-sm text-black-shadow">
            ABOUT
          </li>
        </button>
        <button>
          <li className="navigation_list animate-opacity md:text-2xl text-sm text-black-shadow">
            CONTACT
          </li>
        </button>
      </ul>
    </div>
  );
}
