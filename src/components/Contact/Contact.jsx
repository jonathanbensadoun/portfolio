import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMessageContact } from '../../store/slices/projectSlice';
/**
 *
 * @returns
 * Contact component
 * fonctionnal with netlify form
 */
export default function Contact() {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  return (
    <div
      className={`flex flex-col  items-center justify-center h-full mt-4 p-6 lg:mx-60 border-opacity-60  border-solid border-t-2 ${
        isLightMode ? 'border-secondary' : 'border-white'
      }`}
    >
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-4xl text-center  font-bold">
          {language === 'FR'
            ? 'Interessé pour une collaboration ? '
            : 'Interested in a collaboration ?'}
        </h1>
        <p id="contact" className=" text-center mt-4 py-10">
          {language === 'FR'
            ? "Ouvert à de nouvelles opportunités, je serais ravi d'échanger avec vous sur vos projets. Contactez moi via ce formulaire."
            : 'Open to new opportunities, I would be happy to discuss your projects with you. Contact me via this form.'}
        </p>
        <div
          className={`flex flex-col items-center rounded-lg mt-4 p-4 border-opacity-60 shadow-md bg-opacity-25 ${
            isLightMode ? 'bg-primary' : 'bg-primaryDark'
          } border-solid border-2 ${
            isLightMode ? 'border-secondary' : 'border-white'
          } `}
        >
          <form
            className=" mt-8 flex flex-col items-center "
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col mb-4">
              <label htmlFor="name">
                {language === 'FR' ? 'Nom:' : 'Name:'}
              </label>
              <input
                className={`py-2 px-3 mt-2 w-80 rounded-md bg-opacity-25 ${
                  isLightMode
                    ? 'bg-secondary '
                    : 'bg-secondaryDark bg-opacity-75'
                } `}
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email:</label>
              <input
                className={`py-2 px-3 mt-2 w-80 rounded-md bg-opacity-25 ${
                  isLightMode
                    ? 'bg-secondary '
                    : 'bg-secondaryDark bg-opacity-75'
                }`}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-cust" htmlFor="message">
                Message:
              </label>
              <textarea
                className={`py-2 mt-2 px-3 w-80 rounded-md bg-opacity-25 ${
                  isLightMode
                    ? 'bg-secondary bg-opacity-25'
                    : 'bg-secondaryDark bg-opacity-75'
                }`}
                name="message"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              className={`py-2 px-4 shadow-md  rounded-md bg-opacity-50 ${
                isLightMode
                  ? 'bg-tertiary hover:bg-secondary'
                  : 'bg-tertiaryDark hover:bg-secondaryDark'
              }`}
              type="submit"
            >
              {language === 'FR' ? 'Envoyer' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
