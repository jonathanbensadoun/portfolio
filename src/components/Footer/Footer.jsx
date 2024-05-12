import { useSelector } from 'react-redux';

export default function Footer() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  return (
    <div
      className={`flex flex-col sm:flex-row justify-center text-xs pb-20 shadow-xl bg-opacity-25 mt-4 2xl:mt-0 p-6 2xl:pb-6 2xl:text-base  ${
        isLightMode ? 'bg-primary text-text' : 'bg-primaryDark  text-textDark'
      }`}
    >
      <p>© Droits d'auteur 2024.</p>
      <p> Réalisé par Jonathan Bensadoun</p>
    </div>
  );
}
