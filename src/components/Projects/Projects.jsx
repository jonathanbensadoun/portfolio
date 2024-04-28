import { useState } from 'react';
import CardProject from '../CardProject/CardProject';

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center border-t-2 border-solid border-white-500 flex flex-col justify-center items-center "
    >
      <h1 className="text-3xl mt-4 md:text-6xl">Projects</h1>
      <h2 className="mx-4 mt-4 text-justify md:text-3xl">
        Vous trouverez ici quelques-uns des projets personnels
      </h2>
      <div className="flex flex-wrap justify-center items-center  mt-4 ">
        <CardProject
          title="Osurvivors"
          description="Description du projet 1"
          image="./img/Osurvivors3.png"
          link=""
        />
        <CardProject
          title="Osurvivors"
          description="Description du projet 1"
          image="./img/Osurvivors2.png"
          link=""
        />
        <CardProject
          title="Osurvivors"
          description="Description du projet 1"
          image="./img/Osurvivors1.png"
          link=""
        />
      </div>
    </div>
  );
}
