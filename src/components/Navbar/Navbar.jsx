import Logo from '../Logo/Logo';

import scrollUtils from '../../utils/scrollUtils';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  scrollOnTheProject,
  scrollOnTheContact,
} from '../../store/slices/projectSlice';

export default function Navbar() {
  const isDesktop = useSelector((state) => state.project.isDesktop);
  const isLightMode = useSelector((state) => state.project.isLightMode);

  const dispatch = useDispatch();
  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50  bg-opacity-0 backdrop-blur-sm shadow-md ${
        isLightMode ? 'bg-primary' : 'k bg-primaryDark'
      }`}
    >
      {isDesktop ? (
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
          <NavLink
            to="/"
            onClick={() => {
              dispatch(scrollOnTheProject(true));
            }}
          >
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
          <NavLink to="/" onClick={() => dispatch(scrollOnTheContact(true))}>
            <li className="navigation_list animate-opacity md:text-2xl text-sm text-black-shadow">
              CONTACT
            </li>
          </NavLink>
        </ul>
      ) : (
        <div className="flex justify-center pb-3">
          <Logo />
        </div>
      )}
    </div>
  );
}
