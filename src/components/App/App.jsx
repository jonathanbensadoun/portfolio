import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  scrollOnTheProject,
  scrollOnTheContact,
  isDesktopMediaQuery,
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
  const dispatch = useDispatch();

  const isLightMode = useSelector((state) => state.project.isLightMode);
  const scrollToProject = useSelector((state) => state.project.scrollToProject);
  const scrollToContact = useSelector((state) => state.project.scrollToContact);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

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

  const [vantaEffect, setVantaEffect] = useState(null);
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
        highlightColor: isLightMode ? 0x2b5159 : 0xe3b538,
        midtoneColor: isLightMode ? 0x11ccf2 : 0xff1800,
        lowlightColor: isLightMode ? 0x201163 : 0x2a00f2,
        baseColor: isLightMode ? 0xcee5e5 : 0xcfa1a1,
        blurFactor: 0.45,
        zoom: 1.5,
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isLightMode]);

  return (
    <div
      ref={myRef}
      className={`App text-black-shadow pt-16 2xl:pt-10 transition-all duration-700 ease-out-in ${
        isLightMode ? 'text-text bg-primary' : 'text-textDark bg-primaryDark '
      }`}
    >
      <Navbar />
      <div
        className={`App text-black-shadow mx-4 2xl:mx-16 2xl:my-12 rounded-xl bg-opacity-30   ${
          isLightMode ? ' bg-primary' : ' bg-primaryDark'
        }`}
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
