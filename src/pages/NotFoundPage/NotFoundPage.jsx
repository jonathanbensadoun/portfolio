import React from 'react';
import { useSelector } from 'react-redux';

const NotFoundPage = () => {
  const language = useSelector((state) => state.project.language);
  return (
    <div className="flex flex-col justify-center items-center max-h-screen -mt-7">
      <img className="max-h-90" src="/img/NotFound.png" alt="404" />
      <h1 className="text-2xl 2xl:text-4xl font-bold text-center px-4 ">
        {language === 'FR'
          ? "Notre robot détecte une erreur 404. Pas de panique, cliquez ici pour revenir à l'accueil et repartir sur de bonnes bases."
          : "Our robot is detecting a 404 error. Don't panic, click here to return to the homepage and start fresh."}
      </h1>
    </div>
  );
};

export default NotFoundPage;
