import Tag from '../Tag/Tag';
import softSkillsData from '../../data/softSkillsData.json';
import skillsDataFrontend from '../../data/skillsDataFrontend.json';
import skillsDataBackend from '../../data/skillsDataBackend.json';
import skillsDataWebIntegration from '../../data/skillsDataWebIntegration.json';
import skillsDataOrganisation from '../../data/skillsDataOrganisation.json';
import { useSelector } from 'react-redux';
import IconSvg from '../IconSvg/IconSvg';

export default function Description() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  return (
    <div
      className={`flex flex-col  items-center mt-4 2xl:mx-60 pt-10 border-solid border-t-2 ${
        isLightMode ? 'border-text' : 'border-textDark'
      }`}
      id="description"
    >
      <div className="flex flex-col justify-center items-center p-10 ">
        <h1 className="text-3xl 2xl:text-5xl font-bold">
          {language === 'FR' ? 'Qui suis-je ?' : 'Who am I ?'}
        </h1>

        <h2 className="mx-4 mt-4 text-justify 2xl:text-3xl">
          {language === 'FR'
            ? "Développeur Fullstack passionné spécialisé dans React. Après 18 ans d’expérience professionnelle dans le secteur commercial, je me suis lancé dans une formation intensive à l’école O’clock et obtenu mon Titre Professionnel de 'Développeur web et web mobile'. J'ai eu la chance d'apporter mon savoir faire à l’entreprise Yuli en participant à l'entière conception d'une application mobile en React native. Je suis ouvert aux nouvelles opportunités et prêt à apporter ma passion pour la technologie et mes expériences précédentes au sein de votre entreprise."
            : "Passionate Fullstack developer specializing in React. After 18 years of professional experience in the commercial sector, I embarked on an intensive training course at the O'clock school and obtained my Professional Title of 'Web and mobile web developer'. I had the chance to bring my expertise to the Yuli company by participating in the entire design of a mobile application in React native. I am open to new opportunities and ready to bring my passion for technology and my previous experiences to your company."}
        </h2>
      </div>
      {/* <div className="flex flex-col 2xl:flex-row justify-start items-center ">
        <div className="flex flex-col justify-start items-center  2xl:w-1/2 h-full">
          <h2 className="text-3xl 2xl:text-4xl pt-2 2xl:pt-0">Organisation</h2>
          <Tag data={skillsDataOrganisation} />
        </div>
        <div className=" flex flex-col justify-start items-center  2xl:w-1/2 h-full">
          <h2 className="text-3xl 2xl:text-4xl pt-2 2xl:pt-0">Frontend</h2>
          <Tag data={skillsDataFrontend} />
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row justify-start items-center ">
        <div className="flex flex-col justify-center items-center 2xl:w-1/2">
          <h2 className="text-3xl 2xl:text-4xl pt-2 2xl:pt-0">Backend</h2>
          <Tag data={skillsDataBackend} />
        </div>
        <div className="flex flex-col justify-start items-center  2xl:w-1/2">
          <h2 className="text-3xl 2xl:text-4xl pt-2 2xl:pt-0">Integration</h2>
          <Tag data={skillsDataWebIntegration} />
        </div>
      </div> */}

      <div className="flex flex-col 2xl:flex-row justify-start items-center 2xl:h-full">
        <div className="flex flex-col justify-start items-center w-full ">
          <h2 className="text-3xl 2xl:text-4xl ">Soft Skills</h2>
          <Tag data={softSkillsData} />
        </div>
      </div>
    </div>
  );
}
