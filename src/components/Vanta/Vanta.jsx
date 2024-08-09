import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HALO from 'vanta/dist/vanta.halo.min';
import { TypeAnimation } from 'react-type-animation';
import scrollUtils from '../../utils/scrollUtils';

import ButtonDLCV from '../Buttons/ButtonDLCV/ButtonDLCV';

import {
  changeTextEncode,
  changeTextEncodeEN,
} from '../../store/slices/projectSlice';

/**
 * Vanta component
 * @returns {JSX.Element} Vanta component
 */
export default function Vanta() {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  const homePage = useSelector((state) => state.project.homePage);

  const myRef = useRef(null);

  /**
   * useEffect inside a component Vanta configuration
   * return {void} background effect in header
   */
  useEffect(() => {
    let vantaEffect;
    if (!isLightMode) {
      if (myRef.current) {
        if (vantaEffect) vantaEffect.destroy();
        vantaEffect = HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x000,
          backgroundColor: 0x01012d,
          amplitudeFactor: 1.5,
          size: 1.5,
        });
      }
    }
    if (isLightMode) {
      if (myRef.current) {
        if (vantaEffect) vantaEffect.destroy();
        vantaEffect = HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x000,
          backgroundColor: 0xbbd3ea,
          amplitudeFactor: 1.5,
          size: 1.5,
        });
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isLightMode, language, homePage]);

  return (
    <div>
      <div
        ref={myRef}
        className=" display flex flex-col justify-center h-full lg:h-screen pb-16 max-w-screen pt-16 lg:pt-10 transition-all duration-200 ease-out-in "
      >
        <div
          className={`flex flex-col items-center justify-center  text-center w-full mx-4 rounded-lg  bg-opacity-0  ${
            isLightMode ? 'bg-primary' : 'bg-primaryDark'
          }`}
        >
          <h1 className="text-3xl pt-10 md:pb-10 mx-4 text-center lg:px-20 lg:mx-20 lg:text-6xl 2xl:text-7xl lg:text-left animate-opacity text-black-shadow font-bold">
            {language === 'FR'
              ? 'Développeur fullstack'
              : 'Fullstack developer'}
          </h1>
          <h2 className="text-2xl pb-10  mx-4 text-center lg:px-20 lg:mx-20 lg:text-5xl lg:text-left animate-opacity text-black-shadow">
            React | React Native | Node.js | Express
          </h2>
          <div className="flex items-start w-full">
            <div className=" text-1xl md:text-2xl 2xl:text-4xl mx-4 text-center lg:px-20 lg:mx-40 2xl:mb-20 mb-8 lg:mb-20 xl:mb-4  h-24 lg:h-20 text-black-shadow ">
              {language === 'FR' ? (
                <TypeAnimation
                  key={language}
                  className=""
                  cursor="true"
                  speed={75}
                  sequence={[
                    'Jonathan Bensadoun développeur web passionné spécialisé en React. Fort de mon parcours professionnel diversifié et de ma maîtrise technique, mon objectif est de créer des expériences en ligne exceptionnelles et adaptées à vos besoins.',
                    1000,
                  ]}
                />
              ) : (
                <TypeAnimation
                  key={language}
                  className=""
                  cursor="true"
                  speed={75}
                  sequence={[
                    ' Passionate web developer specialized in React. With my diversified professional background and technical mastery, my goal is to create exceptional online experiences tailored to your needs.',
                    1000,
                  ]}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-black-shadow pt-8">
            <ButtonDLCV />
            <button
              type="button"
              onClick={() => {
                scrollUtils.scrollToProjects();
                dispatch(
                  changeTextEncode('Pensez à envoyer un message à Jonathan !')
                );
                dispatch(
                  changeTextEncodeEN(
                    'Think about sending a message to Jonathan !'
                  )
                );
              }}
            >
              <div
                className={`relative shadow-md inline-flex items-center px-12 py-3 my-3 bg-opacity-25  overflow-hidden text-lg font-medium  border-2 rounded-full  ${
                  isLightMode
                    ? 'border-text text-text  group hover:bg-tertiary '
                    : 'text-textDark border-textDark  group hover:bg-tertiaryDark'
                }`}
              >
                <span
                  className={`absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease ${
                    isLightMode ? 'bg-tertiary' : 'bg-tertiaryDark'
                  }`}
                />
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="relative">
                  {language === 'FR' ? 'Mes projets' : 'MY project'}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
