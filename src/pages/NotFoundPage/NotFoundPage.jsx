import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTextEncode,
  changeTextEncodeEN,
} from '../../store/slices/projectSlice';

const NotFoundPage = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.project.language);

  useEffect(() => {
    dispatch(
      changeTextEncode(
        "404! aie aie aie ! 😱 c'est pas grave revenez à l'accueil 😉"
      )
    );
    dispatch(
      changeTextEncodeEN("404! ouch! 😱 don't worry, click to the home page 😉")
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <img className="max-h-90" src="/img/NotFound.png" alt="404" />
      <h1 className="text-2xl lg:text-4xl font-bold text-center px-4 ">
        {language === 'FR'
          ? "Encode à détecte une erreur 404. Pas de panique, cliquez sur l'accueil pour repartir sur de bonnes bases."
          : "Encode has detected a 404 error. Don't panic, click on the home page to start over."}
      </h1>
    </div>
  );
};

export default NotFoundPage;
