import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tag from '../Tag/Tag';
import {
  changeTextEncode,
  changeTextEncodeEN,
  changeShowButtonUrl,
  changePage,
} from '../../store/slices/projectSlice';

/**
 * ProjectDetail component
 * @param {string} title title of the project
 * @param {string} url link to the project
 * @param {string} shortDescription short description of the project
 * @param {string} description description of the project
 * @param {string[]} technologies list of technologies used for the project
 * @returns {JSX.Element} ProjectDetail component
 */
export default function ProjectDetail({
  title,
  url,
  shortDescription,
  description,
  technologies,
}) {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.project.language);

  useEffect(() => {
    dispatch(
      changeTextEncode(`Pour visiter ${title} cliquez sur le bouton ci-dessous`)
    );
    dispatch(changeTextEncodeEN(`To visit ${title} click on the button below`));
    dispatch(changeShowButtonUrl(url));
  }, [dispatch, title, url]);
  useEffect(() => {
    dispatch(changePage('project'));
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-start p-4 pt-12 lg:mx-40 ">
      <div className=" flex flex-col h-full items-center space-y-4   ">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-10">
          {title}
        </h1>
        <p className="text-xl text-center mt-5">{shortDescription}</p>
        <button
          className={`py-2 px-4 shadow-md rounded-md bg-opacity-50 ${
            isLightMode
              ? 'bg-tertiary hover:bg-primary'
              : 'bg-tertiaryDark hover:bg-primaryDark'
          }`}
          onClick={() => window.open(url, '_blank')}
          type="button"
        >
          {language === 'FR'
            ? `Visitez le site ${title}`
            : `Visit the ${title} site`}
        </button>
      </div>
      <div className="flex flex-col justify-start items-center ">
        <img
          src={`/img/${title}.gif`}
          alt={`visite animé du site ${title}`}
          className="rounded-lg shadow-md mt-4 "
        />

        <p className="text-center mt-4 lg:text-1xl">{description}</p>
        <h2 className="text-3xl">
          {language === 'FR' ? 'Outils utilisés' : 'tools used'}
        </h2>
        <Tag data={technologies} />
      </div>
    </div>
  );
}
