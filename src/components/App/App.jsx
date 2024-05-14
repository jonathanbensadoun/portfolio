import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  scrollOnTheProject,
  scrollOnTheContact,
  isDesktopMediaQuery,
  showReloadVanta,
} from '../../store/slices/projectSlice';

import scrollUtils from '../../utils/scrollUtils';

import Navbar from '../Navbar/Navbar';
import HomePage from '../../pages/HomePage/HomePage';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';
import SocialNavbar from '../SocialNavbar/SocialNavbar';
import Footer from '../Footer/Footer';
import FOG from 'vanta/dist/vanta.fog.min';
import CELLS from 'vanta/dist/vanta.cells.min';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const dispatch = useDispatch();

  const isLightMode = useSelector((state) => state.project.isLightMode);
  const scrollToProject = useSelector((state) => state.project.scrollToProject);
  const scrollToContact = useSelector((state) => state.project.scrollToContact);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const reloadVanta = useSelector((state) => state.project.reloadVanta);

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
  }, [scrollToProject, scrollToContact]);

  useEffect(() => {
    dispatch(isDesktopMediaQuery(isDesktop));
  }, [isDesktop]);

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
        highlightColor: isLightMode ? 0x2b5159 : 0xb175e8,
        midtoneColor: isLightMode ? 0x11ccf2 : 0x7e21b8,
        lowlightColor: isLightMode ? 0x201163 : 0x731fd4,
        baseColor: isLightMode ? 0xcee5e5 : 0xf0f59,
        blurFactor: 0.45,
        zoom: 1.5,
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
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
      <SocialNavbar />
    </div>
  );
}

export default App;
