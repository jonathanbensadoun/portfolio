export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-customPurple">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Contact</h1>
        <p className="text-white text-center mt-4">
          Vous pouvez me contacter via mon adresse mail ou mon numéro de
          téléphone.
        </p>
        <div className="flex flex-col items-center justify-center mt-4">
          <a
            href="mailto:jo@gmail.com"
            className="text-white text-center text-lg"
          >
            {' '}
            jo @ gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <a href="tel:+33612345678" className="text-white text-center text-lg">
            {' '}
            06 12 34 56 78
          </a>
        </div>
      </div>
    </div>
  );
}
