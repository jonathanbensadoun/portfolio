import { useSelector } from 'react-redux';

export default function ButtonDLCV() {
  const isLightMode = useSelector((state) => state.project.isLightMode);

  const handleDownload = () => {
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
    <button onClick={handleDownload}>
      <div
        className={`relative shadow-xl  inline-flex items-center px-12 py-3 my-3 overflow-hidden text-lg font-medium  border-2 rounded-full  ${
          isLightMode
            ? 'border-text text-text group hover:bg-text'
            : 'text-textDark border-textDark group hover:bg-textDark'
        }`}
      >
        <span
          className={`absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease ${
            isLightMode ? 'bg-secondary' : 'bg-secondaryDark'
          }`}
        ></span>
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
            ></path>
          </svg>
        </span>
        <span className="relative">Télécharger mon CV</span>
      </div>
    </button>
  );
}
