import React, { useEffect, useRef } from 'react';
import Vanta from '../Vanta/Vanta';
import FOG from 'vanta/dist/vanta.fog.min';
import CELLS from 'vanta/dist/vanta.cells.min';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import { useSelector } from 'react-redux';
export default function Header() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  const homePage = useSelector((state) => state.project.homePage);
  const myRef = useRef(null);
  // useEffect(() => {
  //   let vantaEffect;
  //   if (myRef.current) {
  //     if (vantaEffect) vantaEffect.destroy();
  //     vantaEffect = FOG({
  //       el: myRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 100.0,
  //       minWidth: 100.0,
  //       highlightColor: isLightMode ? 0x25b5c7 : 0x7e21b8,
  //       midtoneColor: isLightMode ? 0x89c1e8 : 0x731fd4,
  //       lowlightColor: isLightMode ? 0x82c2db : 0x3e1e56,
  //       baseColor: isLightMode ? 0xe3f2f2 : 0x000,
  //       blurFactor: 0.45,
  //       zoom: 1,
  //       speed: 0.4,
  //     });
  //   }

  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [isLightMode, language, homePage]);
  return (
    <div
    // ref={myRef}
    >
      <Vanta />
    </div>
  );
}
