import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CardProject({ title, description, image, link }) {
  const [openCard, setOpenCard] = useState(false);

  return (
    <div
      className={`hover:shadow-4xl m-4  `}
      onClick={() => setOpenCard(!openCard)}
    >
      <div
        className={` bg-purple-800 pt-2 px-2 ${
          openCard ? 'rounded-t' : 'rounded'
        }  transition-all ease-in-out duration-300  `}
      >
        <div className="w-60 h-60 ">
          <img
            src={image}
            alt={title}
            className={`rounded top-0 left-0 w-60 h-60 object-cover`}
          />
        </div>

        <div
          className={`flex justify-center pt-1 transition-all ease-in-out duration-300 ${
            openCard ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className={`rounded bottom-0  h-1 bg-white transition-all ease-in-out duration-300 ${
              openCard ? 'w-40' : 'w-14'
            } `}
          ></div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center  bottom-0 left-0 right-0 bg-purple-800  rounded-b transition-all duration-500 ease-in-out transform ${
          openCard ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <h1 className="text-1xl md:text-2xl">{title}</h1>
        <h2 className="mx-4 mt-4 text-justify md:text-1xl">{description}</h2>
        <Link to={`/${link}`}>
          <button className="bg-purple-500 hover:bg-purple-700 text-white mt-5 font-bold py-2 px-4 rounded mb-2">
            Voir le projet
          </button>
        </Link>
        <div className="flex justify-center">
          <div
            className={` rounded bottom-0 left-0 w-40 h-1 bg-white  ${
              openCard ? 'w-40' : 'w-14'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
