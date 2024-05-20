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
  showReloadVanta,
  getLocalStorage,
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
  const dispatch = useDispatch();

  const isLightMode = useSelector((state) => state.project.isLightMode);
  const scrollToProject = useSelector((state) => state.project.scrollToProject);
  const scrollToContact = useSelector((state) => state.project.scrollToContact);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const reloadVanta = useSelector((state) => state.project.reloadVanta);
  const scrollToDescription = useSelector(
    (state) => state.project.scrollToDescription
  );

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
    dispatch(showReloadVanta(false));
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isLightMode, reloadVanta]);

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
      <Footer />
      <PNJ />
      <SocialNavbar />
    </div>
  );
}

export default App;
