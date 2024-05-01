import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-customPurple">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Contact</h1>
        <p className="text-white text-center mt-4">
          Vous pouvez me contacter via ce formulaire, je vous répondrai dans les
          plus brefs délais.
        </p>
        <form
          className="mt-8 w-80"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-col mb-4">
            <label className="text-white" htmlFor="name">
              Nom:
            </label>
            <input
              className="py-2 px-3 bg-gray-200 rounded-md"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white" htmlFor="email">
              Email:
            </label>
            <input
              className="py-2 px-3 bg-gray-200 rounded-md"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white" htmlFor="message">
              Message:
            </label>
            <textarea
              className="py-2 px-3 bg-gray-200 rounded-md"
              name="message"
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
