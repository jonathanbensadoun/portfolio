import Tag from '../Tag/Tag';
import softSkillsData from '../../data/softSkillsData.json';
import skillsData from '../../data/skillsData.json';

export default function Description() {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="flex flex-col justify-center items-center p-10 md:px-60">
        <h1 className="text-3xl mt-4 md:text-6xl">Qui suis-je ? </h1>
        <div className={`m-4  rounded bottom-0  h-1 bg-white w-full `}></div>
        <h2 className="mx-4 mt-4 text-justify md:text-3xl">
          Développeur Fullstack passionné spécialisé dans React. Après 18 ans
          d'expérience professionnelle dans le secteur commercial, j’ai réalisée
          une formation dans l’école O’clock . suivie d’un travail dans
          l’entreprise Yuli pour concevoir une application mobile en React
          native de A à Z. Je suis ouvert aux nouvelles opportunités et prêt à
          apporter ma passion pour la technologie et mon expérience précédente
          au sein de votre entreprise.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:px-60 ">
        <div
          className="flex flex-col justify-center items-center
        "
        >
          <h2 className="text-6xl">Soft Skills</h2>
          <Tag data={softSkillsData} />
        </div>
        <div className="flex flex-col justify-between items-center ">
          <h2 className="text-6xl">Compétence</h2>
          <Tag data={skillsData} />
        </div>
      </div>
    </div>
  );
}
