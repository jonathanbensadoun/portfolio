import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsDown } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { GiClick } from 'react-icons/gi';
/**
 * CardProject component
 * @param {string} title  title of the project
 * @param {string} description description of the project
 * @param {string} image link to the image of the project
 * @param {string} link link to the project
 * @returns
 */
export default function CardProject({ title, description, image }) {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const [openCard, setOpenCard] = useState(false);
  const [showIconTouch, setShowIconTouch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIconTouch(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="mt-4 lg:mx-4 relative lg:static transition-all duration-500 ease-in-out lg:h-80 w-80 cursor-pointer top-0 left-0 shadow-md text-textDark"
      onMouseEnter={() => setOpenCard(true)}
      onMouseLeave={() => setOpenCard(false)}
    >
      <div
        className={`  p-2  ${
          openCard ? 'lg:rounded-t' : 'rounded'
        }  transition-all ease-in-out duration-300 bg-opacity-25   ${
          isLightMode ? 'bg-secondary' : 'bg-secondaryDark'
        }   `}
      >
        <div className="flex flex-col justify-end items-center">
          {showIconTouch && (
            <GiClick className="w-10 h-10 absolute z-20 bottom-0 right-0 lg:hidden animate-bounce200" />
          )}
          <img
            src={image}
            alt={title}
            className={`rounded top-0 left-0 w-80 h-80 object-cover relative z-10 `}
          />
          {!openCard && (
            <FiChevronsDown className="absolute w-10 h-10 shadow-md animate-blink" />
          )}
        </div>
      </div>
      <div>
        <div
          className={`absolute shadow-md  top-0 lg:static flex flex-col justify-between items-center bg-opacity-90 lg:bg-opacity-25 transition-all duration-700 ease-out transform  w-full ${
            openCard
              ? 'translate-y-0 opacity-100 h-full lg:rounded-b z-20 '
              : '-translate-y-0 opacity-0  lg:-translate-y-60 z-0'
          }
          ${
            isLightMode ? 'bg-primaryDark lg:bg-secondary' : 'bg-secondaryDark'
          }`}
        >
          <h1 className="text-3xl pt-8 lg:pt-4">{title}</h1>
          <h2 className="mx-4 mt-4 text-center lg:text-1xl ">{description}</h2>
          <Link to={`project/${title === 'Dinoto API' ? 'DinotoAPI' : title}`}>
            <button
              className={`mt-5 font-bold py-2 px-4 rounded mb-2 bg-opacity-50   ${
                isLightMode
                  ? 'bg-tertiary hover:bg-primary '
                  : 'bg-tertiaryDark hover:bg-primaryDark'
              }`}
              type="button"
            >
              Voir le projet
            </button>
          </Link>
          <div
            className={`rounded bottom-0  h-1  transition-all ease-out duration-1000  ${
              openCard ? 'w-60 translate-y-0 ' : 'w-0 -translate-y-full '
            } 
            ${isLightMode ? 'bg-text' : 'bg-textDark'}`}
          />
        </div>
      </div>
    </div>
  );
}
