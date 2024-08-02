import { useSelector } from 'react-redux';

export default function Footer() {
  const language = useSelector((state) => state.project.language);

  return (
    <div
      className={`flex flex-col sm:flex-row lg:space-x-2 justify-center text-xs pb-20 shadow-md bg-opacity-25 mt-4 lg:mt-0 p-6 lg:pb-6 lg:text-base  `}
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
