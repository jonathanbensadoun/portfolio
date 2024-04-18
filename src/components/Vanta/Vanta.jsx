import './Vanta.scss';
import React, { useState, useEffect, useRef } from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import FOG from 'vanta/dist/vanta.fog.min';
import BIRDS from 'vanta/dist/vanta.birds.min';
import Navbar from '../Navbar/Navbar';

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
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
      <div ref={myRef} className="animation">
        <Navbar />
      </div>
    </div>
  );
}
