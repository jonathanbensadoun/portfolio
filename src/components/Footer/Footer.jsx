import { useSelector } from 'react-redux';

export default function Footer() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  return (
    <div
      className={`flex justify-center text-xs pb-20 shadow-xl bg-opacity-25  p-6 2xl:pb-6 2xl:text-base  ${
        isLightMode ? 'bg-primary text-text' : 'bg-primaryDark  text-textDark'
      }`}
    >
      <p>© Droits d'auteur 2024.</p>
      <p> Réalisé par Jonathan Bensadoun</p>
    </div>
  );
}
