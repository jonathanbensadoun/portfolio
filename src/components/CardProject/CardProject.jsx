import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsDown } from 'react-icons/fi';

export default function CardProject({ title, description, image, link }) {
  const [openCard, setOpenCard] = useState(false);

  return (
    <div
      className={`m-4 relative md:static transition-all duration-500 ease-in-out md:h-80 w-80 cursor-pointer top-0 left-0 shadow-lg`}
      onMouseEnter={() => setOpenCard(true)}
      onMouseLeave={() => setOpenCard(false)}
    >
      <div
        className={`  bg-purple-800 p-2  ${
          openCard ? 'md:rounded-t' : 'rounded'
        }  transition-all ease-in-out duration-300    `}
      >
        <div className="flex flex-col justify-end items-center">
          <img
            src={image}
            alt={title}
            className={`rounded top-0 left-0 w-80 h-80 object-cover relative  `}
          />
          {!openCard && (
            <FiChevronsDown className="absolute w-10 h-10 shadow-md animate-blink" />
          )}
        </div>
      </div>
      <div>
        <div
          className={`absolute top-0   md:static flex flex-col justify-between items-center bg-purple-800  rounded-b transition-all duration-700 ease-out transform  w-full ${
            openCard
              ? 'translate-y-0 opacity-100 h-full rounded md:rounded-b '
              : '-translate-y-0 opacity-0 md:-translate-y-60 '
          }`}
        >
          <h1 className="text-3xl pt-4 ">{title}</h1>
          <h2 className="mx-4 mt-4 text-center md:text-1xl ">{description}</h2>
          <Link to={`project/${title}`}>
            <button className="bg-purple-500 hover:bg-purple-700 text-white mt-5 font-bold py-2 px-4 rounded mb-2">
              Voir le projet
            </button>
          </Link>
          <div
            className={`rounded bottom-0  h-1 bg-white transition-all ease-out duration-1000  ${
              openCard ? 'w-60 translate-y-0 ' : 'w-0 -translate-y-full '
            } `}
          ></div>
        </div>
      </div>
    </div>
  );
}
