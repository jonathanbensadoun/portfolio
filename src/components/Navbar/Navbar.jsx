import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import scrollUtils from '../../utils/scrollUtils';

import {
  showreaload,
  changePage,
  changeShowButtonUrl,
  changeTextEncode,
  changeTextEncodeEN,
  scrollOnTheProject,
  scrollOnTheContact,
  scrollOnTheDescription,
} from '../../store/slices/projectSlice';

import Logo from '../Logo/Logo';
/**
 * Navbar component
 * @returns {JSX.Element} Navbar component
 */
export default function Navbar() {
  const dispatch = useDispatch();

  const isDesktop = useSelector((state) => state.project.isDesktop);
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 bg-opacity-25 backdrop-blur-sm shadow-md ${
        isLightMode ? 'bg-primary' : 'bg-primaryDark'
      } `}
    >
      {isDesktop ? (
        <ul className="flex justify-between items-center p-4 md:px-8">
          <NavLink
            to="/"
            onClick={() => {
              dispatch(showreaload(true));
              dispatch(changeShowButtonUrl(''));
              dispatch(changePage('home'));
              scrollUtils.scrollToTop();
            }}
          >
            <li
              className={`navigation_list animate-opacity md:text-2xl text-sm text-black-shadow ${
                isLightMode ? 'hover:text-tertiary' : 'hover:text-tertiaryDark'
              }`}
            >
              {language === 'FR' ? 'ACCUEIL' : 'HOME'}
            </li>
          </NavLink>

          <NavLink
            to="/"
            onClick={() => {
              dispatch(showreaload(true));
              dispatch(scrollOnTheDescription(true));
              dispatch(changeShowButtonUrl(''));
              dispatch(changePage('home'));
              dispatch(
                changeTextEncode(
                  ' React, Redux, Node.js, Express.js are his specialties 😸'
                )
              );
              dispatch(
                changeTextEncodeEN(
                  'React, Redux, Node.js, Express.js sont ses spécialités 😸'
                )
              );
            }}
          >
            <li
              className={`navigation_list animate-opacity md:text-2xl text-sm text-black-shadow ${
                isLightMode ? 'hover:text-tertiary' : 'hover:text-tertiaryDark'
              }`}
            >
              {language === 'FR' ? 'A PROPOS' : 'ABOUT'}
            </li>
          </NavLink>
          <Logo />
          <NavLink
            to="/"
            onClick={() => {
              dispatch(showreaload(true));
              dispatch(scrollOnTheProject(true));
              dispatch(changeShowButtonUrl(''));
              dispatch(changePage('home'));
              dispatch(
                changeTextEncode(
                  '✨Cliquez sur une image pour découvrir un projet!✨'
                )
              );
              dispatch(
                changeTextEncodeEN(
                  '✨Click on the image to discover the project!✨'
                )
              );
            }}
          >
            <li
              className={`navigation_list animate-opacity md:text-2xl text-sm text-black-shadow ${
                isLightMode ? 'hover:text-tertiary' : 'hover:text-tertiaryDark'
              }`}
            >
              {language === 'FR' ? 'PROJETS' : 'PROJECTS'}
            </li>
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              dispatch(showreaload(true));
              dispatch(scrollOnTheContact(true));
              dispatch(changeShowButtonUrl(''));
              dispatch(changePage('home'));
              dispatch(
                changeTextEncode(
                  ' Un projet ?  Une question ? Une simple salutation ? Utilisez le formulaire ! 😁'
                )
              );
              dispatch(
                changeTextEncodeEN(
                  ' A project? A question? A simple greeting? Use the form! 😁'
                )
              );
            }}
          >
            <li
              className={`navigation_list animate-opacity md:text-2xl text-sm text-black-shadow ${
                isLightMode ? 'hover:text-tertiary' : 'hover:text-tertiaryDark'
              }`}
            >
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
