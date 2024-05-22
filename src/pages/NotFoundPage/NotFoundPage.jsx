import React from 'react';
import { useSelector } from 'react-redux';

const NotFoundPage = () => {
  const language = useSelector((state) => state.project.language);
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <img className="max-h-90" src="/img/NotFound.png" alt="404" />
      <h1 className="text-2xl 2xl:text-4xl font-bold text-center px-4 ">
        {language === 'FR'
          ? "Notre robot détecte une erreur 404. Pas de panique, cliquez sur l'accueil pour repartir sur de bonnes bases."
          : "Our robot detects a 404 error. Don't panic, click on the home page to start over."}
      </h1>
    </div>
  );
};

export default NotFoundPage;
