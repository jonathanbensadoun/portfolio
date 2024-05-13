import { useDispatch, useSelector } from 'react-redux';

import Tag from '../Tag/Tag';
import { useEffect } from 'react';
import { showReloadVanta } from '../../store/slices/projectSlice';
export default function ProjectDetail({
  title,
  url,
  shortDescription,
  description,
  technologies,
}) {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   function handleDOMContentLoaded() {
  //     dispatch(showReloadVanta(true));
  //   }

  //   document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

  //   return () => {
  //     document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
  //   };
  // }, []);

  return (
    <div className="p-4 mt-6 h-full">
      <div className=" flex flex-col h-full justify-center items-center space-y-4   ">
        <h1 className="text-4xl font-bold text-center mt-10">{title}</h1>
        <p className="text-xl text-center mt-5">{shortDescription}</p>
        <button
          className={`py-2 px-4 shadow-md rounded-md bg-opacity-50 ${
            isLightMode
              ? 'bg-tertiary hover:bg-primary'
              : 'bg-tertiaryDark hover:bg-primaryDark'
          }`}
          onClick={() => window.open(url, '_blank')}
        >
          Visitez le site {title}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <img
          src={`/img/${title}.png`}
          alt={`image du site ${title}`}
          className="rounded-lg shadow-md m-4"
        />
        <h2 className="text-3xl">Aperçu du projet {title}</h2>
        <p className="text-center mt-4">{description}</p>
        <h2 className="text-3xl">Outils utilisés</h2>
        <Tag data={technologies} />
      </div>
    </div>
  );
}
