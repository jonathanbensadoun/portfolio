import Tag from '../Tag/Tag';
import softSkillsData from '../../data/softSkillsData.json';
import skillsDataFrontend from '../../data/skillsDataFrontend.json';
import skillsDataBackend from '../../data/skillsDataBackend.json';
import skillsDataWebIntegration from '../../data/skillsDataWebIntegration.json';
import skillsDataOrganisation from '../../data/skillsDataOrganisation.json';
import { useSelector } from 'react-redux';

export default function Description() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  return (
    <div
      className={`flex flex-col  items-center mt-4 md:mx-60  border-solid border-t-2 ${
        isLightMode ? 'border-text' : 'border-textDark'
      }`}
    >
      <div className="flex flex-col justify-center items-center p-10 ">
        <h1 className="text-3xl md:text-5xl font-bold">Qui suis-je ?</h1>

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
      <div className="flex flex-col md:flex-row justify-start items-center ">
        <div className="flex flex-col justify-start items-center  md:w-1/2 h-full">
          <h2 className="text-3xl md:text-4xl pt-2 md:pt-0">Organisation</h2>
          <Tag data={skillsDataOrganisation} />
        </div>
        <div className=" flex flex-col justify-start items-center  md:w-1/2 h-full">
          <h2 className="text-3xl md:text-4xl pt-2 md:pt-0">Frontend</h2>
          <Tag data={skillsDataFrontend} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center ">
        <div className="flex flex-col justify-center items-center md:w-1/2">
          <h2 className="text-3xl md:text-4xl pt-2 md:pt-0">Backend</h2>
          <Tag data={skillsDataBackend} />
        </div>
        <div className="flex flex-col justify-start items-center  md:w-1/2">
          <h2 className="text-3xl md:text-4xl pt-2 md:pt-0">Integration</h2>
          <Tag data={skillsDataWebIntegration} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center md:h-full">
        <div className="flex flex-col justify-start items-center w-full ">
          <h2 className="text-3xl md:text-4xl ">Soft Skills</h2>
          <Tag data={softSkillsData} />
        </div>
      </div>
    </div>
  );
}
