import CardProject from '../CardProject/CardProject';

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col  items-center   border-solid border-white border-t-2 "
    >
      <h1 className="text-3xl md:mt-4 md:text-6xl">Projects</h1>
      <h2 className="mx-4 mt-4 text-justify md:text-3xl">
        Découvrez mon univers à tavers quelques-uns de mes projets personnels
      </h2>
      <div
        className={`flex flex-wrap justify-center items-center  mt-4 md:pb-60`}
      >
        <CardProject
          title="Osurvivors"
          description="“ Jeu de rôle et de survie ”"
          image="./img/Osurvivors3.png"
        />
        <CardProject
          title="Dinoto"
          description="“ Explorer les dinosaures 
          à travers 
          cette encyclopédie. ”"
          image="./img/dinoto.png"
        />
        <CardProject
          title="Dinoto API"
          description="“ API open source de plus de 100 dinosaures.  contenant des informations détaillé et images
          généré avec Dall-e.  ”"
          image="./img/dinotoAPI.png"
        />
      </div>
    </div>
  );
}
