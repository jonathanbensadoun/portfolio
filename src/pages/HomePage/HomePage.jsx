import React from 'react';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import Description from '../../components/Description/Description';
import Contact from '../../components/Contact/Contact';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Description />
      <Projects />
      <Contact />
    </div>
  );
}
