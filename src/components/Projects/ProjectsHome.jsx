import { useSelector } from 'react-redux';
import CardProject from '../CardProject/CardProject';

/**
 * Projects component in home page
 * @returns {JSX.Element} Projects component
 */
export default function Projects() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);

  return (
    <div
      id="projects"
      className={`flex flex-col  items-center justify-center  ${
        isLightMode ? 'border-text' : 'border-textDark'
      }`}
    >
      <h1 className="text-3xl lg:mt-4 lg:text-6xl font-bold pt-6 ">
        {language === 'FR' ? 'Mes projets' : 'My projects'}
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-4 lg:pb-8">
        <CardProject
          title="Where I am ?"
          description={
            language === 'FR'
              ? '“ Application Android & IOS de géolocalisation. ”'
              : '“ Geolocation application.”'
          }
          image="./img/Where.png"
        />
        <CardProject
          title="Osurvivors"
          description={
            language === 'FR'
              ? '“ Jeu de rôle et de survie ”'
              : '“ Role-playing and survival game ”'
          }
          image="./img/Osurvivors3.png"
        />
        <CardProject
          title="Dinoto"
          description={
            language === 'FR'
              ? '“ Explorer les dinosaures à travers cette encyclopédie. ”'
              : '“ Explore dinosaurs through this encyclopedia.”'
          }
          image="./img/dinotomini.png"
        />
        <CardProject
          title="Dinoto API"
          description={
            language === 'FR'
              ? '“ API open source de plus de 100 dinosaures.  contenant des informations détaillé et images généré avec Dall-e.”'
              : '“ Open source API of more than 100 dinosaurs. containing detailed information and images generated with Dall-e.”'
          }
          image="./img/dinotoapimini.png"
        />
        <CardProject
          title="Nimbus"
          description={
            language === 'FR'
              ? '“ Application météo simple et intuitive. ”'
              : '“ Simple and intuitive weather application.”'
          }
          image="./img/Nimbus-sky.png"
        />
        <CardProject
          title="Showcase"
          description={
            language === 'FR'
              ? '“ Template de site vitrine pour restaurant. ”'
              : '“ Showcase website template for restaurant.”'
          }
          image="./img/showcase.png"
        />
        <CardProject
          title="Tool"
          description={
            language === 'FR'
              ? '“ Divers outils pour les développeurs. ”'
              : '“ Various tools for developers.”'
          }
          image="./img/Tool.png"
        />
      </div>
    </div>
  );
}
