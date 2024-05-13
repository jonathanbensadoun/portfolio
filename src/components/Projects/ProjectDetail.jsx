import { useSelector } from 'react-redux';

import Tag from '../Tag/Tag';

export default function ProjectDetail({
  title,
  url,
  shortDescription,
  description,
  technologies,
}) {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  return (
    <div className="p-4 mt-6">
      <div className=" flex flex-col h-full justify-center items-center space-y-4 2xl:h-full  ">
        <h1 className="text-4xl font-bold text-center mt-10">{title}</h1>
        <p className="text-xl text-center mt-5">{shortDescription}</p>
        <button
          className={`py-2 px-4 shadow-xl rounded-md bg-opacity-50 ${
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
          className="rounded-lg shadow-xl m-4"
        />
        <h2 className="text-3xl">Aperçu du projet {title}</h2>
        <p className="text-center mt-4">{description}</p>
        <h2 className="text-3xl">Outils utilisé</h2>
        <Tag data={technologies} />
      </div>
    </div>
  );
}
