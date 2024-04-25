import CardProject from '../CardProject/CardProject';

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center border-t-2 border-solid border-white-500 flex flex-col justify-center "
    >
      <h1 className="text-3xl md:text-6xl">Projects</h1>
      <h2 className="mx-4 mt-4 text-justify md:text-3xl">
        Vous trouverez ici quelques-uns des projets personnels
      </h2>
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4  ">
        <CardProject
          title="Osurvivors"
          description="Description du projet 1"
          image="./img/Osurvivors3.png"
          link="https://www.google.com"
        />
        <CardProject
          title="Osurvivors"
          description="Description du projet 1"
          image="./img/Osurvivors3.png"
          link="https://www.google.com"
        />
        <CardProject
          title="Osurvivors"
          description="Description du projet 1"
          image="./img/Osurvivors3.png"
          link="https://www.google.com"
        />
      </div>
    </div>
  );
}
