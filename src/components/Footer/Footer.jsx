import { useSelector } from 'react-redux';

export default function Footer() {
  const language = useSelector((state) => state.project.language);
  const isLightMode = useSelector((state) => state.project.isLightMode);
  return (
    <div
      className={`flex flex-col sm:flex-row 2xl:space-x-2 justify-center text-xs pb-20 shadow-md bg-opacity-25 mt-4 2xl:mt-0 p-6 2xl:pb-6 2xl:text-base  `}
    >
      <p>
        {language === 'FR' ? "© Droits d'auteur 2024" : '© Copyright 2024'}
      </p>
      <p>
        {language === 'FR'
          ? ' Réalisé par Jonathan Bensadoun'
          : 'Made by Jonathan Bensadoun'}
      </p>
    </div>
  );
}
