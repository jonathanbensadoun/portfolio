import { useSelector } from 'react-redux';

export default function Footer() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  return (
    <div
      className={`flex justify-center text-xs pb-20 shadow-xl bg-opacity-25  p-6 md:pb-6 md:text-base  ${
        isLightMode
          ? 'bg-secondaryDark text-text'
          : 'bg-secondary  text-textDark'
      }`}
    >
      <p>© Droits d'auteur 2024.</p>
      <p> Réalisé par Jonathan Bensadoun</p>
    </div>
  );
}
