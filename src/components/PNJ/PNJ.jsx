import './PNJ.scss';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import {
  changeTextEncode,
  changeTextEncodeEN,
} from '../../store/slices/projectSlice';

/**
 * PNJ component
 * @returns {JSX.Element} PNJ component
 */
export default function PNJ() {
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
    '🤗',
    '🤩',
    '🎊',
    '🤝',
    "Pensez à contacter Jonathan pour plus d'informations ! 😉",
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
    '🤗',
    '🤩',
    '🎊',
    '🤝',
    'Feel free to contact Jonathan for more information !😉',
  ];

  const imagesEncode = useMemo(
    () => [
      '2.png',
      '3.png',
      '4.png',
      'Encode-sourire.png',
      'Encode-sourire.png',
      'pnj2.png',
    ],
    []
  );

  const [imageEncode, setImageEncode] = useState(imagesEncode[0]);

  /**
   * Random message function
   * @returns {void}  void
   */
  const randomMessage = () => {
    const index = Math.floor(Math.random() * messagesFR.length);
    dispatch(changeTextEncodeEN(messagesEN[index]));
    dispatch(changeTextEncode(messagesFR[index]));
  };
  useEffect(() => {
    /**
     * Random image function
     * @returns {void}  void
     */
    const randomImage = () => {
      const index = Math.floor(Math.random() * imagesEncode.length);
      setImageEncode(imagesEncode[index]);
    };
    randomImage();
  }, [textEncode, textEncodeEN, imagesEncode]);

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
            cursor="true"
            speed={75}
            sequence={[text, 1000]}
          />
          {showButtonUrl && (
            <button
              type="button"
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
        <div className="absolute border-2 border-transparent top-0 right-0" />
      </div>

      <div
        className="h-40 w-40 animate-bounce mt-2 cursor-pointer ml-4"
        role="button"
        tabIndex="0"
        onClick={randomMessage}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            randomMessage();
          }
        }}
      >
        <img
          src={imageEncode ? `/img/${imageEncode}` : '/img/2.png'}
          alt="Encode le PNJ est petit robot sympathique qui vous accompagne sur le site"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
