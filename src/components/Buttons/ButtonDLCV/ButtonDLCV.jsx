import { useDispatch, useSelector } from 'react-redux';
import {
  changeTextEncode,
  changeTextEncodeEN,
} from '../../../store/slices/projectSlice';

/**
 * ButtonDLCV component : Button to download the CV
 * @returns {JSX.Element}
 */
export default function ButtonDLCV() {
  const dispatch = useDispatch();

  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);

  /**
   * Handle download of the CV
   * @returns {void}
   */
  const handleDownload = () => {
    dispatch(changeTextEncode('Vous avez téléchargé le CV de Jonathan ! 📜 '));
    dispatch(changeTextEncodeEN('You downloaded Jonathan CV ! 📜 '));
    // Créer un élément <a> temporaire
    const link = document.createElement('a');
    // Définir l'URL du fichier à télécharger
    link.href = './docs/CV-Jonathan-Bensadoun.pdf'; // Assurez-vous de remplacer par le bon chemin
    // Spécifier le nom du fichier à télécharger
    link.download = 'CV-Jonathan-Bensadoun.pdf'; // Nom du fichier téléchargé
    // Simuler un clic sur le lien
    link.click();
  };

  return (
    <button onClick={handleDownload} type="button">
      <div
        className={`relative shadow-md  inline-flex items-center px-12 py-3 my-3 overflow-hidden text-lg font-medium  border-2 rounded-full  ${
          isLightMode
            ? 'border-text text-text group hover:bg-tertiary'
            : 'text-textDark border-textDark group hover:bg-tertiaryDark'
        }`}
      >
        <span
          className={`absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease ${
            isLightMode ? 'bg-tertiary' : 'bg-tertiaryDark'
          }`}
        />
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="relative">
          {language === 'FR' ? 'Télécharger mon CV' : 'Download my resume'}
        </span>
      </div>
    </button>
  );
}
