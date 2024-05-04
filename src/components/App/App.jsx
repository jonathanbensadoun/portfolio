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
          minHeight: 10.0,
          minWidth: 10.0,
          // highlightColor: 0x2b3bce,
          // midtoneColor: 0x294250,
          // lowlightColor: 0xe8dfd4,
          // baseColor: 0x8a72ea,
          blurFactor: 0.2,
          speed: 0.7,
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
      className={`App text-black-shadow ${
        isLightMode ? 'text-text bg-primary' : 'text-textDark bg-primaryDark'
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:title" element={<ProjectPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
      <Footer />
      <SocialNavbar />
    </div>
  );
}

export default App;
