import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  scrollOnTheProject,
  scrollOnTheContact,
  scrollOnTheDescription,
  isDesktopMediaQuery,
  showreaload,
  getLocalStorage,
  changeTextEncode,
  changeTextEncodeEN,
  changePage,
  changeShowButtonUrl,
} from '../../store/slices/projectSlice';

import scrollUtils from '../../utils/scrollUtils';

import Navbar from '../Navbar/Navbar';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';
import SocialNavbar from '../SocialNavbar/SocialNavbar';
import Footer from '../Footer/Footer';
import FOG from 'vanta/dist/vanta.fog.min';
import CELLS from 'vanta/dist/vanta.cells.min';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import PNJ from '../PNJ/PNJ';
function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [homePage, setHomePage] = useState(true);
  const dispatch = useDispatch();

  const isLightMode = useSelector((state) => state.project.isLightMode);
  const scrollToProject = useSelector((state) => state.project.scrollToProject);
  const scrollToContact = useSelector((state) => state.project.scrollToContact);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const reaload = useSelector((state) => state.project.reaload);
  const scrollToDescription = useSelector(
    (state) => state.project.scrollToDescription
  );
  const page = useSelector((state) => state.project.page);
  useEffect(() => {
    if (page === 'home') {
      setHomePage(true);
    }
  }, [page]);
  const language = useSelector((state) => state.project.language);
  const location = useLocation();
  useEffect(() => {
    if (scrollToProject) {
      scrollUtils.scrollToProjects();
      dispatch(scrollOnTheProject(false));
    }
    if (scrollToContact) {
      scrollUtils.scrollToContact();
      dispatch(scrollOnTheContact(false));
    }
    if (scrollToDescription) {
      scrollUtils.scrollToDescription();
      dispatch(scrollOnTheDescription(false));
    }
  }, [scrollToProject, scrollToContact, scrollToDescription]);

  useEffect(() => {
    dispatch(isDesktopMediaQuery(isDesktop));
  }, [isDesktop]);

  useEffect(() => {
    let language = localStorage.getItem('language');
    let isLightMode = localStorage.getItem('isLightMode');
    if (!language) {
      localStorage.setItem('language', 'FR');
      language = 'FR';
    }
    if (!isLightMode) {
      localStorage.setItem('isLightMode', true);
      isLightMode = true;
    }

    isLightMode = isLightMode === 'false' ? false : true;

    if (language || isLightMode) {
      dispatch(
        getLocalStorage({ isLightMode: isLightMode, language: language })
      );
    }
  }, []);

  const myRef = useRef(null);
  useEffect(() => {
    let vantaEffect;
    if (myRef.current) {
      if (vantaEffect) vantaEffect.destroy();
      vantaEffect = FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 100.0,
        minWidth: 100.0,
        highlightColor: isLightMode ? 0x25b5c7 : 0x7e21b8,
        midtoneColor: isLightMode ? 0x89c1e8 : 0x731fd4,
        lowlightColor: isLightMode ? 0x82c2db : 0x3e1e56,
        baseColor: isLightMode ? 0xe3f2f2 : 0x000,
        blurFactor: 0.45,
        zoom: 1,
        speed: 0.4,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isLightMode, language, homePage]);

  useEffect(() => {
    dispatch(
      changeTextEncode('Salut, je suis Encode, assistant de Jonathan. 🤗')
    );
    dispatch(
      changeTextEncodeEN(
        'Hi, I am Encode, Jonathan assistant. I am here to help you. 🤗'
      )
    );
    setHomePage(false);
  }, [homePage]);
  useEffect(() => {
    let reachedDescription = false;
    let reachedProjectsHome = false;
    let reachedContact = false;

    const handleScroll = () => {
      const description = document.getElementById('description');
      const projects = document.getElementById('projects');
      const contact = document.getElementById('contact');

      const scrollPosition = window.scrollY;

      if (
        !reachedDescription &&
        description &&
        description.offsetTop - 500 <= scrollPosition
      ) {
        reachedDescription = true;
        dispatch(
          changeTextEncodeEN(
            'React, Redux, Node.js, Express.js are his specialties 😸'
          )
        );
        dispatch(
          changeTextEncode(
            'React, Redux, Node.js, Express.js sont ses spécialités 😸'
          )
        );
      }

      if (
        !reachedProjectsHome &&
        projects &&
        projects.offsetTop - 500 <= scrollPosition
      ) {
        reachedProjectsHome = true;
        dispatch(changeTextEncodeEN('✨Click on the image to discover it!✨'));
        dispatch(
          changeTextEncode("✨Cliquez sur l'image pour le découvrir !✨")
        );
      }

      if (
        !reachedContact &&
        contact &&
        contact.offsetTop - 500 <= scrollPosition
      ) {
        reachedContact = true;
        dispatch(
          changeTextEncodeEN(
            ' A project? A question? A simple greeting? Use the form! 😁'
          )
        );
        dispatch(
          changeTextEncode(
            'Un projet ?  Une question ? Une simple salutation ? Utilisez le formulaire ! 😁'
          )
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      ref={myRef}
      className={`App pt-16 2xl:pt-10 transition-all duration-700 ease-out-in ${
        isLightMode ? 'text-text bg-primary' : 'text-textDark bg-primaryDark '
      }`}
    >
      <Navbar />
      <div
        className={`App  mx-4 2xl:mx-16 2xl:my-12 rounded-xl bg-opacity-30  `}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:title" element={<ProjectPage />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <PNJ />
      <Footer />
      <SocialNavbar />
    </div>
  );
}

export default App;
