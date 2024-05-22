import './PNJ.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import {
  changeTextEncode,
  changeTextEncodeEN,
} from '../../store/slices/projectSlice';

const PNJ = () => {
  const dispatch = useDispatch();
  const textEncode = useSelector((state) => state.project.textEncode);
  const textEncodeEN = useSelector((state) => state.project.textEncodeEN);
  const language = useSelector((state) => state.project.language);
  const showButtonUrl = useSelector((state) => state.project.showButtonUrl);
  const isLightMode = useSelector((state) => state.project.isLightMode);

  const text = language === 'FR' ? textEncode : textEncodeEN;
  const key = `${language}-${textEncode}-${textEncodeEN}`;

  const messagesFR = [
    'ça chatouille ! 😂',
    '😊 Bonjour !',
    'Comment ça va ? 😉',
    '!?🤔',
    'Belle journée 🤗!',
    'Ravi de vous Rencontrez 😁',
    'Quoi de neuf ? 😎',
    "C'est incroyable ! 🤩",
    'Bonne chance ! 🍀',
    'Prenez soin de vous 🥰',
    'Merci beaucoup 🙏',
    'Bien joué ! 👍',
    'Super idée ! 💡',
    "Je suis d'accord 🤝",
    "C'est génial ! 🎊",
    'Quel plaisir ! 😊',
  ];
  const messagesEN = [
    'it tickles ! 😂',
    '😊 Hello!',
    'How are you? 😉',
    '!?🤔 ',
    'Nice Day 🤗 !',
    'Nice to meet you 😁',
    "What's up? 😎",
    "That's amazing! 🤩",
    'Good luck! 🍀',
    'Take care 🥰',
    'Thank you so much 🙏',
    'Well done! 👍',
    'Great idea! 💡',
    'I agree 🤝',
    "That's awesome! 🎊",
    'What a pleasure! 😊',
  ];

  const randomMessage = () => {
    const index = Math.floor(Math.random() * messagesFR.length);
    dispatch(changeTextEncodeEN(messagesEN[index]));
    dispatch(changeTextEncode(messagesFR[index]));
  };

  return (
    <div
      className={`fixed bottom-12 lg:bottom-2 lg:right-4 right-2 z-50 invisible lg:visible `}
    >
      <div className="relative inline-block">
        <div
          className={`bubble flex flex-col justify-center items-center border text-center bg-opacity-80 border-gray-300 rounded-lg p-4 px-2 max-w-48 ${
            isLightMode ? 'bg-white' : 'bg-secondaryDark'
          }`}
        >
          <TypeAnimation
            key={key}
            className="w-48 text-center px-2"
            cursor={true}
            speed={75}
            sequence={[text, 1000]}
          />
          {showButtonUrl && (
            <button
              className={`py-2 mt-4 px-4 shadow-md text-center rounded-md bg-opacity-50 ${
                isLightMode
                  ? 'bg-tertiary hover:bg-primary'
                  : 'bg-tertiaryDark hover:bg-primaryDark'
              }`}
              onClick={() => window.open(showButtonUrl, '_blank')}
            >
              Go to Website
            </button>
          )}
        </div>
        <div className="absolute border-2 border-transparent top-0 right-0"></div>
      </div>

      <img
        className="h-40 w-40 animate-bounce"
        src={'/img/pnj2.png'}
        alt="PNJ"
        onClick={randomMessage}
      />
    </div>
  );
};

export default PNJ;
