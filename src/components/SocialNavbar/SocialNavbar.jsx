import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiHome2Fill } from 'react-icons/ri';
import {
  scrollOnTheProject,
  scrollOnTheContact,
} from '../../store/slices/projectSlice';
import { GrProjects, GrContact } from 'react-icons/gr';
import { MdOutlineTranslate } from 'react-icons/md';
import scrollUtils from '../../utils/scrollUtils';
import ButtonLightMode from '../Buttons/ButtonLightMode/ButtonLightMode';
import {
  changeLanguage,
  changeShowButtonUrl,
  changePage,
  changeTextEncode,
  changeTextEncodeEN,
} from '../../store/slices/projectSlice';
import Flag from 'react-flagkit';

export default function SocialNavbar() {
  const dispatch = useDispatch();
  const isDesktop = useSelector((state) => state.project.isDesktop);
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);

  return (
    <div
      className={`fixed bg-opacity-20 backdrop-blur-sm shadow-md  bottom-0 left-0 right-0 lg:bottom-auto lg:top-60 lg:right-auto py-4 lg:py-0 z-30 lg:flex lg:rounded-r-xl ${
        isLightMode ? 'bg-secondary' : 'bg-secondaryDark'
      }`}
    >
      <nav className="flex items-center  justify-between px-4 lg:px-2 lg:py-4 space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
        <div className="flex items-center justify-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
          <Link
            to="https://www.linkedin.com/in/jonathan-bensadoun/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-tertiary"
            onClick={() => {
              dispatch(
                changeTextEncode(
                  'Vous avez Aimez le profil LinkedIn de Jonathan ?'
                )
              );
              dispatch(
                changeTextEncodeEN('Did you like Jonathan LinkedIn profile ?')
              );
            }}
          >
            <FaLinkedinIn className="text-2xl" />
          </Link>
          <Link
            to="https://github.com/jonathanbensadoun"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-tertiary"
            onClick={() => {
              dispatch(
                changeTextEncode(
                  'Vous avez Aimez le profil GitHub de Jonathan ?'
                )
              );
              dispatch(
                changeTextEncodeEN('Did you like Jonathan GitHub profile ?')
              );
            }}
          >
            <FaGithub className="text-2xl" />
          </Link>
        </div>
        {!isDesktop && (
          <div className="flex items-center justify-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
            <Link
              to="/"
              className=" hover:text-tertiary"
              onClick={() => {
                scrollUtils.scrollToTop();
                dispatch(changeShowButtonUrl(''));
                dispatch(changePage('home'));
              }}
            >
              <RiHome2Fill className="text-2xl" />
            </Link>
            <Link
              to="/"
              className=" hover:text-tertiary"
              onClick={() => {
                dispatch(changeShowButtonUrl(''));
                dispatch(changePage('home'));
                dispatch(scrollOnTheProject(true));
              }}
            >
              <GrProjects className="text-2xl" />
            </Link>
            <Link
              to="/"
              className=" hover:text-tertiary"
              onClick={() => {
                dispatch(changeShowButtonUrl(''));
                dispatch(changePage('home'));
                dispatch(scrollOnTheContact(true));
              }}
            >
              <GrContact className="text-2xl" />
            </Link>
          </div>
        )}
        <div className="flex space-x-4 lg:space-x-0 items-center lg:flex-col lg:space-y-4">
          <div>
            <ButtonLightMode />
          </div>
          <div>
            <div
              className={`flex lg:flex-col items-center space-x-2 lg:space-x-0 text-sm justify-center text-1xl rounded bg-opacity-50 ${
                isLightMode ? 'bg-primary' : 'bg-primaryDark'
              }`}
              onClick={() => {
                dispatch(changeLanguage());
                dispatch(changeTextEncodeEN('Ok, I speak English.'));
                dispatch(changeTextEncode('Ok, je parle Francais. '));
              }}
            >
              <Flag country={language} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
