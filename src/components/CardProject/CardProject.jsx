export default function CardProject({ title, description, image, link }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-1xl md:text-2xl">{title}</h1>
      <h2 className="mx-4 mt-4 text-justify md:text-1xl">{description}</h2>
      <div className="w-60 h-60 overflow-hidden ">
        <img
          src={image}
          alt={title}
          className=" top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voir le projet
        </button>
      </a>
    </div>
  );
}
