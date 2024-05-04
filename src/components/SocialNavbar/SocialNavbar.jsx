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
import scrollUtils from '../../utils/scrollUtils';
import ButtonLightMode from '../Buttons/ButtonLightMode/ButtonLightMode';

export default function SocialNavbar() {
  const dispatch = useDispatch();
  const isDesktop = useSelector((state) => state.project.isDesktop);
  const isLightMode = useSelector((state) => state.project.isLightMode);

  return (
    <div
      className={`fixed shadow-xl  bottom-0 left-0 right-0 md:bottom-auto md:top-60 md:right-auto py-4 md:py-0 z-30 md:flex md:rounded-r ${
        isLightMode ? 'bg-secondary' : 'bg-secondaryDark'
      }`}
    >
      <nav className="flex items-center  justify-between px-4 md:px-2 md:py-4 space-x-4 md:flex-col md:space-x-0 md:space-y-4">
        <div className="flex items-center justify-center space-x-4 md:flex-col md:space-x-0 md:space-y-4">
          <Link
            to="https://www.linkedin.com/in/jonathan-bensadoun/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400"
          >
            <FaLinkedinIn className="text-2xl" />
          </Link>
          <Link
            to="https://github.com/jonathanbensadoun"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </div>
        {!isDesktop && (
          <div className="flex items-center justify-center space-x-4 md:flex-col md:space-x-0 md:space-y-4">
            <Link
              to="/"
              className=" hover:text-gray-400"
              onClick={scrollUtils.scrollToTop}
            >
              <RiHome2Fill className="text-2xl" />
            </Link>
            <Link
              to="/"
              className=" hover:text-gray-400"
              onClick={() => dispatch(scrollOnTheProject(true))}
            >
              <GrProjects className="text-2xl" />
            </Link>
            <Link
              to="/"
              className=" hover:text-gray-400"
              onClick={() => dispatch(scrollOnTheContact(true))}
            >
              <GrContact className="text-2xl" />
            </Link>
          </div>
        )}
        <div className="md:pt-8">
          <ButtonLightMode />
        </div>
      </nav>
    </div>
  );
}
