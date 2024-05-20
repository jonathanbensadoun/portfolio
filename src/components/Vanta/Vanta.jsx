import React, { useState, useEffect, useRef } from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import FOG from 'vanta/dist/vanta.fog.min';
import BIRDS from 'vanta/dist/vanta.birds.min';
import DOTS from 'vanta/dist/vanta.dots.min';
import WAVES from 'vanta/dist/vanta.waves.min';
import RINGS from 'vanta/dist/vanta.rings.min';
import NET from 'vanta/dist/vanta.net.min';
import scrollUtils from '../../utils/scrollUtils';

import { TypeAnimation } from 'react-type-animation';
import ButtonDLCV from '../Buttons/ButtonDLCV/ButtonDLCV';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTextEncode,
  changeTextEncodeEN,
} from '../../store/slices/projectSlice';

export default function Vanta() {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       FOG({
  //         el: myRef.current,
  //         // mouseControls: true,
  //         // touchControls: true,
  //         // gyroControls: false,
  //         // minHeight: 200.0,
  //         // minWidth: 200.0,
  //         // highlightColor: 0xe8e8e8,
  //         // midtoneColor: 0xe8dfd4,
  //         // lowlightColor: 0x919191,
  //         // baseColor: 0x425966,
  //         // blurFactor: 0.47,
  //         // speed: 0.9,

  //         // FOG
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  // highlightColor: 0x415f70,
  // midtoneColor: 0x294250,
  // lowlightColor: 0xe8dfd4,
  // baseColor: 0xadc5d7,
  //         blurFactor: 0.54,
  //         speed: 0.9,
  //         //NET
  //         // mouseControls: true,
  //         // touchControls: true,
  //         // gyroControls: true,
  //         // minHeight: 200.0,
  //         // minWidth: 200.0,
  //         // scale: 1.0,
  //         // scaleMobile: 1.0,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div>
      <div
        // ref={myRef}
        className=" display flex flex-col justify-center h-full 2xl:h-screen pb-16"
      >
        <div
          className={`flex flex-col items-center mx-4 rounded-lg  bg-opacity-0  ${
            isLightMode ? 'bg-primary' : 'bg-primaryDark'
          }`}
        >
          <h1 className="text-2xl pt-10 mx-4 text-justify 2xl:px-20 2xl:mx-20 2xl:text-5xl 2xl:text-left animate-opacity text-black-shadow">
            Jonathan Bensadoun
          </h1>
          <h2 className="text-2xl pb-10  mx-4 text-justify 2xl:px-20 2xl:mx-20 2xl:text-5xl 2xl:text-left animate-opacity text-black-shadow">
            {language === 'FR'
              ? 'Développeur fullstack'
              : 'Fullstack developer'}
          </h2>
          <div className="flex items-start w-full">
            <div className=" text-1xl  mx-4 text-justify 2xl:px-20 2xl:mx-20  h-40 sm:h-30 2xl:h-20 text-black-shadow ">
              {language === 'FR' ? (
                <TypeAnimation
                  key={language}
                  className=""
                  cursor={true}
                  speed={75}
                  sequence={[
                    ' Développeur web passionné spécialisé en React. Fort de mon parcours professionnel diversifié et de ma maîtrise technique mon objectif est de créer des expériences en ligne exceptionnelles et adaptées à vos besoins.',
                    1000,
                  ]}
                />
              ) : (
                <TypeAnimation
                  key={language}
                  className=""
                  cursor={true}
                  speed={75}
                  sequence={[
                    ' Passionate web developer specializing in React. With my various professionnal experiences and technical expertise, my goal is to create exceptional online experiences tailored to your needs.',
                    1000,
                  ]}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-black-shadow pt-8">
            <ButtonDLCV />
            <button
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
                    ? 'border-text text-text  group hover:bg-text '
                    : 'text-textDark border-textDark  group hover:bg-textDark'
                }`}
              >
                <span
                  className={`absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease ${
                    isLightMode ? 'bg-secondary' : 'bg-secondaryDark'
                  }`}
                ></span>
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
                    ></path>
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
