import { useState, useEffect } from 'react';

/**
 * Loader component

 * @returns {JSX.Element} components create a loader
 */
const Loader = () => {
  const [currentImage, setCurrentImage] = useState(2);

  useEffect(() => {
    /**
     * Set an interval to change the image every 300ms
     */
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        if (prevImage === 4) {
          return 2;
        } else {
          return prevImage + 1;
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={`/img/${currentImage}.png`}
        alt={`Image ${currentImage}`}
        className="transition-opacity duration-300 w-60"
        style={{ opacity: 1 }}
      />
      <div className="text-2xl flex justify-center items-center mt-4 m-2 font-bold">
        <p className="flex mt-4 m-2">Loading </p>
        <div className="flex space-x-2">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce200">.</span>
          <span className="animate-bounce400">.</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
