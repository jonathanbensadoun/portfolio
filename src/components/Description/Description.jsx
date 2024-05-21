import Tag from '../Tag/Tag';
import softSkillsData from '../../data/softSkillsData.json';

import { useSelector } from 'react-redux';

import { IoCodeSlashSharp } from 'react-icons/io5';
import { FaNode } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa6';
import { VscGithub } from 'react-icons/vsc';
export default function Description() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  return (
    <div
      className={`flex flex-col  items-center mt-4 2xl:mx-60 pt-10  ${
        isLightMode ? 'border-text' : 'border-textDark'
      }`}
      id="description"
      style={{ maxWidth: '90vw', margin: '0 auto' }}
    >
      <div className="flex flex-col justify-center items-center px-10 ">
        <h1 className="text-3xl 2xl:text-5xl pb-8 font-bold">
          {language === 'FR' ? 'Je suis ...' : 'I am ...'}
        </h1>

        <h2 className="mx-4 mt-4 pb-10 text-justify 2xl:text-2xl">
          {language === 'FR'
            ? "Développeur Fullstack passionné spécialisé dans React. Après 18 ans d’expérience professionnelle dans le secteur commercial, je me suis lancé dans une formation intensive à l’école O’clock et obtenu mon Titre Professionnel de 'Développeur web et web mobile'. J'ai eu la chance d'apporter mon savoir faire à l’entreprise Yuli en participant à l'entière conception d'une application mobile en React native. Je suis ouvert aux nouvelles opportunités et prêt à apporter ma passion pour la technologie et mes expériences précédentes au sein de votre entreprise."
            : "Passionate Fullstack developer specializing in React. After 18 years of professional experience in the commercial sector, I embarked on an intensive training course at the O'clock school and obtained my Professional Title of 'Web and mobile web developer'. I had the chance to bring my expertise to the Yuli company by participating in the entire design of a mobile application in React native. I am open to new opportunities and ready to bring my passion for technology and my previous experiences to your company."}
        </h2>
      </div>

      <div className="flex flex-col 2xl:flex-row justify-start items-center 2xl:h-full  ">
        <div className="flex flex-col justify-start items-center w-full pb-10 ">
          <h2 className="text-2xl pb-10 2xl:text-3xl ">
            {language === 'GB' ? 'Soft skills' : 'Compétences transversales'}
          </h2>
          <Tag data={softSkillsData} />
        </div>
      </div>
      <div
        className={`flex flex-col 2xl:flex-row w-full rounded-xl shadow-md  border-opacity-60  border-2 ${
          isLightMode ? 'border-secondary' : 'border-secondaryDark'
        }`}
      >
        <div
          className={`flex flex-col justify-start items-center  w-full  flex-grow pt-8 `}
        >
          <div
            className={`flex rounded-full p-2 bg-opacity-50 ${
              isLightMode ? 'bg-tertiary ' : 'bg-tertiaryDark'
            }`}
          >
            <FaReact className="text-5xl text-primaryDark" />
          </div>
          <h2 className="text-3xl 2xl:text-3xl font-bold text-center py-4">
            {language === 'FR' ? 'Développeur Frontend' : 'Frontend Developer'}
          </h2>
          <div className="flex flex-col justify-center items-center">
            <h3
              className={`text-1xl 2xl:text-2xl text-center font-bold pb-2 text-opacity-50 ${
                isLightMode ? 'text-tertiary' : 'text-tertiaryDark'
              }`}
            >
              {language === 'FR'
                ? 'Langages et frameworks de prédilection:'
                : 'Favorite languages and frameworks:  '}
            </h3>
            <ul className="flex flex-wrap  justify-center items-center space-x-1 pb-4 ">
              <li>React, </li>
              <li> React Native, </li>
              <li> Redux, </li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3
              className={`text-1xl 2xl:text-2xl font-bold pb-2 text-opacity-50 ${
                isLightMode ? 'text-tertiary' : 'text-tertiaryDark'
              }`}
            >
              {language === 'FR'
                ? 'Outils fréquemment utilisés:'
                : 'Frequently used tools:'}
            </h3>
            <ul className="flex flex-col justify-center items-center">
              <li>TypeScript, JavaScript</li>
              <li>CSS, SCSS, HTML</li>
              <li>Bulma, Bootstrap</li>
              <li>Material UI, Semantic UI</li>
              <li>Phaser 3</li>
            </ul>
          </div>
        </div>

        <div
          className={`flex  flex-col flex-grow  justify-start items-center w-full mt-4 2xl:mt-0 p-8  border-opacity-60  border-solid border-t-2 2xl:border-0 2xl:border-x-2  ${
            isLightMode ? 'border-secondary' : 'border-secondaryDark'
          } `}
        >
          <div
            className={`flex rounded-full p-2 bg-opacity-50 ${
              isLightMode ? 'bg-tertiary ' : 'bg-tertiaryDark'
            }`}
          >
            <FaNode className="text-5xl text-primaryDark" />
          </div>
          <h2 className="text-2xl 2xl:text-3xl font-bold text-center py-4">
            {language === 'FR' ? 'Développeur Backend' : 'Backend Developer'}
          </h2>
          <div className="flex flex-col justify-center items-center text-center">
            <h3
              className={`text-1xl 2xl:text-2xl font-bold pb-2 text-opacity-50 ${
                isLightMode ? 'text-tertiary' : 'text-tertiaryDark'
              }`}
            >
              {language === 'FR'
                ? 'Langages et frameworks de prédilection:'
                : 'Favorite languages and frameworks:  '}
            </h3>
            <ul className="flex flex-wrap  justify-center items-center space-x-1 pb-4 ">
              <li> Node.js, </li>
              <li> Express.js,</li>
              <li>PostgreSQL, </li>
              <li> Supabase, </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3
              className={`text-1xl 2xl:text-2xl font-bold pb-2 text-opacity-50 ${
                isLightMode ? 'text-tertiary' : 'text-tertiaryDark'
              }`}
            >
              {language === 'FR'
                ? 'Outils fréquemment utilisés:'
                : 'Frequently used tools:'}
            </h3>
            <ul className="flex flex-col justify-center items-center">
              <li>Strapi</li>
              <li>Sequelize</li>
              <li>Nodemailer</li>
              <li>JWT</li>
            </ul>
          </div>
        </div>

        <div
          className={`flex  flex-col flex-grow justify-start items-center w-full mt-4 2xl:mt-0 p-8 border-solid  border-opacity-60  border-t-2 2xl:border-0  ${
            isLightMode ? 'border-secondary' : 'border-secondaryDark'
          } `}
        >
          <div
            className={`flex rounded-full p-2 bg-opacity-50 ${
              isLightMode ? 'bg-tertiary ' : 'bg-tertiaryDark'
            }`}
          >
            <VscGithub className="text-5xl text-primaryDark" />
          </div>
          <h2 className="text-2xl 2xl:text-3xl font-bold text-center py-4">
            {language === 'FR' ? 'Gestion de projet' : 'Project Management'}
          </h2>
          <div className="flex flex-col justify-center items-center text-center">
            <h3
              className={`text-1xl 2xl:text-2xl font-bold pb-2 text-opacity-50 ${
                isLightMode ? 'text-tertiary' : 'text-tertiaryDark'
              }`}
            >
              {language === 'FR'
                ? 'Outils de prédilection:'
                : 'Favorite tools:  '}
            </h3>
            <ul className="flex flex-wrap  justify-center items-center space-x-1 pb-4 ">
              <li> GIT, </li>
              <li> GITHUB,</li>
              <li> Expo, </li>
              <li>Notion, </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3
              className={`text-1xl 2xl:text-2xl font-bold pb-2 text-opacity-50 ${
                isLightMode ? 'text-tertiary' : 'text-tertiaryDark'
              }`}
            >
              {language === 'FR'
                ? 'Outils fréquemment utilisés:'
                : 'Frequently used tools:'}
            </h3>
            <ul className="flex flex-col justify-center items-center">
              <li>Dall-E, Stable Diffusion </li>
              <li>Whimsical, Mocodo</li>
              <li>GPT-4o, Copilote </li>
              <li>OVH, Netlify</li>
              <li>Trello, Slack, Discord </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <li className="text-2xl 2xl:text-3xl">
                {language === 'FR'
                  ? 'Conception et développement de sites web'
                  : 'Design and development of websites'}
              </li>
              <li className="text-2xl 2xl:text-3xl">
                {language === 'FR'
                  ? 'Création d’interfaces utilisateur interactives'
                  : 'Creation of interactive user interfaces'}
              </li>
              <li className="text-2xl 2xl:text-3xl">
                {language === 'FR'
                  ? 'Optimisation de la performance des applications'
                  : 'Optimization of application performance'}
              </li> */
}
