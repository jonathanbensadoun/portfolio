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
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,

          touchControls: true,
          gyroControls: true,
          minHeight: 1.0,
          minWidth: 1.0,
          highlightColor: 0x2b3bce,
          // midtoneColor: 0x294250,
          // lowlightColor: 0xffffff,
          // baseColor: 0x8a72ea,
          blurFactor: 0.5,
          speed: 0.7,
          // gyroControls: false,
          // minHeight: 200.0,
          // minWidth: 200.0,
          // scale: 1.0,
          // color1: 0x1c27bd,
          // color2: 0x2b888e,
          // size: 2.4,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      className={`App text-black-shadow pt-16 2xl:pt-10 ${
        isLightMode ? 'text-text bg-primary' : 'text-textDark bg-primaryDark'
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
