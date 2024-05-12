import React from 'react';
import Header from '../../components/Header/Header';
import ProjectsHome from '../../components/Projects/ProjectsHome';
import Description from '../../components/Description/Description';
import Contact from '../../components/Contact/Contact';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Description />
      <ProjectsHome />
      <Contact />
    </div>
  );
}
