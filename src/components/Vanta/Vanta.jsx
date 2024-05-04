import React, { useState, useEffect, useRef } from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import FOG from 'vanta/dist/vanta.fog.min';
import BIRDS from 'vanta/dist/vanta.birds.min';
import DOTS from 'vanta/dist/vanta.dots.min';
import WAVES from 'vanta/dist/vanta.waves.min';
import RINGS from 'vanta/dist/vanta.rings.min';
import NET from 'vanta/dist/vanta.net.min';
import scrollUtils from '../../utils/scrollAnimation';
import Navbar from '../Navbar/Navbar';
import { TypeAnimation } from 'react-type-animation';

export default function Vanta() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          // mouseControls: true,
          // touchControls: true,
          // gyroControls: false,
          // minHeight: 200.0,
          // minWidth: 200.0,
          // highlightColor: 0xe8e8e8,
          // midtoneColor: 0xe8dfd4,
          // lowlightColor: 0x919191,
          // baseColor: 0x425966,
          // blurFactor: 0.47,
          // speed: 0.9,

          // FOG
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x415f70,
          midtoneColor: 0x294250,
          lowlightColor: 0xe8dfd4,
          baseColor: 0xadc5d7,
          blurFactor: 0.54,
          speed: 0.9,
          //NET
          // mouseControls: true,
          // touchControls: true,
          // gyroControls: true,
          // minHeight: 200.0,
          // minWidth: 200.0,
          // scale: 1.0,
          // scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    projectsElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div
        ref={myRef}
        className=" display flex flex-col justify-center h-screen"
      >
        <h1 className="text-2xl pt-10 mx-4 text-justify md:px-20 md:mx-20 md:text-5xl md:text-left animate-opacity text-black-shadow">
          Bonjour tout le monde ! je suis Jonathan Bensadoun
        </h1>

        <div className="text-1xl pt-4 mx-4 text-justify md:px-20 md:mx-20 md:text-2xl h-60 md:h-24 text-black-shadow ">
          <TypeAnimation
            className=""
            cursor={true}
            sequence={[
              ' Développeur web passionné spécialisé en React, Fort de mon parcours diversifié et de ma maîtrise technique mon objectif est de créer des expériences en ligne exceptionnelles et adaptées à vos besoins.',
              1000,
            ]}
            // wrapper="h2"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-black-shadow">
          <button onClick={scrollUtils.scrollToProjects}>
            <div className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-white-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-customPurple opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
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
              <span className="relative">Projets</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
