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
  const dispatch = useDispatch();
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  return (
    <div
      id="contact"
      className={`flex flex-col  items-center justify-center h-full mt-4 p-6 2xl:mx-60 border-solid border-t-2 ${
        isLightMode ? 'border-text' : 'border-textDark'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center  font-bold">
          {language === 'FR'
            ? 'Interessé pour une collaboration ? '
            : 'Interested in a collaboration ?'}
        </h1>
        <p className=" text-center mt-4">
          {language === 'FR'
            ? "Ouvert à de nouvelles opportunités, je serais ravi d'échanger avec vous sur vos projets. Contactez moi via ce formulaire."
            : 'Open to new opportunities, I would be happy to discuss your projects with you. Contact me via this form.'}
        </p>
        <div
          className={`flex flex-col items-center rounded-lg mt-4 p-4 shadow-md bg-opacity-25 ${
            isLightMode
              ? 'bg-secondary text-text'
              : 'bg-secondaryDark text-textDark'
          } `}
        >
          <form
            className="mt-8 w-80  "
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
                className={`py-2 px-3 rounded-md bg-opacity-25 ${
                  isLightMode ? 'bg-white ' : 'bg-black'
                }`}
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email:</label>
              <input
                className={`py-2 px-3 rounded-md bg-opacity-25 ${
                  isLightMode ? 'bg-white ' : 'bg-black'
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
                className={`py-2 px-3 rounded-md bg-opacity-25 ${
                  isLightMode ? 'bg-white ' : 'bg-black'
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
                  ? 'bg-tertiary hover:bg-primary'
                  : 'bg-tertiaryDark hover:bg-primaryDark'
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
