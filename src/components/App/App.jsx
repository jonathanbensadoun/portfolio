import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  scrollOnTheProject,
  scrollOnTheContact,
  scrollOnTheDescription,
  isDesktopMediaQuery,
  getLocalStorage,
  changeTextEncode,
  changeTextEncodeEN,
} from '../../store/slices/projectSlice';

import scrollUtils from '../../utils/scrollUtils';

import Navbar from '../Navbar/Navbar';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';
import SocialNavbar from '../SocialNavbar/SocialNavbar';
import Footer from '../Footer/Footer';
import PNJ from '../PNJ/PNJ';
import Loader from '../Loader/Loader';

function App() {
  const [homePage, setHomePage] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true); // Utilisation de useState

  const dispatch = useDispatch();

  const isLightModeInStore = useSelector((state) => state.project.isLightMode);
  const scrollToProject = useSelector((state) => state.project.scrollToProject);
  const scrollToContact = useSelector((state) => state.project.scrollToContact);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const scrollToDescription = useSelector(
    (state) => state.project.scrollToDescription
  );
  const page = useSelector((state) => state.project.page);

  useEffect(() => {
    if (isLightModeInStore !== null) {
      setIsLightMode(isLightModeInStore);
    }
  }, [isLightModeInStore]);
  useEffect(() => {
    if (page === 'home') {
      setHomePage(true);
    }
  }, [page]);

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
  }, [scrollToProject, scrollToContact, scrollToDescription, dispatch]);

  useEffect(() => {
    dispatch(isDesktopMediaQuery(isDesktop));
  }, [isDesktop, dispatch]);

  useEffect(() => {
    let language = localStorage.getItem('language');
    let storedIsLightMode = localStorage.getItem('isLightMode');

    if (!language) {
      localStorage.setItem('language', 'FR');
      language = 'FR';
    }
    if (!storedIsLightMode) {
      localStorage.setItem('isLightMode', true);
      storedIsLightMode = true;
    }

    setIsLightMode(storedIsLightMode !== 'false');

    if (language || storedIsLightMode) {
      dispatch(
        getLocalStorage({
          isLightMode: storedIsLightMode !== 'false',
          language,
        })
      );
    }
  }, [dispatch]);

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
  }, [homePage, dispatch]);

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
        projects.offsetTop - 800 <= scrollPosition
      ) {
        reachedProjectsHome = true;
        dispatch(
          changeTextEncodeEN('✨Click on an image to discover a project!✨')
        );
        dispatch(
          changeTextEncode(
            '✨Cliquez sur une image pour découvrir un projet!✨'
          )
        );
      }

      if (
        !reachedContact &&
        contact &&
        contact.offsetTop - 800 <= scrollPosition
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
  }, [dispatch]);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    setTimeout(handleLoad, 1000);

    const asciiArt = `
    Mali              Luna

     /l、              /l、
   （ﾟ､ ｡７          （ﾟ､ ｡７
    |、~ヽ            |、~ヽ
    じしf_,)ノ .      じしf_,)ノ

    Bonjour, si vous avez des questions, n'hésitez pas à me contacter! 😁
    Jonathan Bensadoun
    `;

    console.log(asciiArt);
  }, []);

  return (
    <div
      className={`App  transition-all duration-700 ease-out-in ${
        isLightMode ? 'text-text bg-primary' : 'text-textDark bg-primaryDark '
      }`}
    >
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className="rounded-xl bg-opacity-30">
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
      )}
    </div>
  );
}

export default App;
