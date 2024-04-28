import { useState } from 'react';
import CardProject from '../CardProject/CardProject';
import './Projects.scss';

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col  items-center   border-solid border-white-500 "
    >
      <h1 className="text-3xl mt-4 md:text-6xl">Projects</h1>
      <h2 className="mx-4 mt-4 text-justify md:text-3xl">
        Vous trouverez ici quelques-uns des projets personnels
      </h2>
      <div className="flex flex-wrap justify-center items-center  mt-4 ">
        <CardProject
          title="Osurvivors"
          description="“ Jeu de rôle et de survie ”"
          image="./img/Osurvivors3.png"
          link=""
        />
        <CardProject
          title="Dinoto"
          description="“ Explorer les dinosaures 
          à travers 
          cette encyclopédie. ”"
          image="./img/Osurvivors2.png"
          link=""
        />
        <CardProject
          title="Dinoto API"
          description="“ API open source de plus de 100 dinosaures.  contenant des informations détaillé et images
          généré avec Dall-e.  ”"
          image="./img/Osurvivors1.png"
          link=""
        />
      </div>
    </div>
  );
}
