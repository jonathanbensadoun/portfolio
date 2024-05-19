import { useSelector } from 'react-redux';

export default function Tag({ data }) {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  return (
    <div className="flex  flex-wrap justify-center items-center  mb-4 2xl:pb-4">
      {data.map((tag) => (
        <div
          key={tag.id}
          className={`mx-4 mt-6 p-2 bg-tagColor shadow-lg bg-opacity-50   rounded-md text-sm sm:text-base ${
            isLightMode ? 'bg-tertiary' : 'bg-tertiaryDark'
          }`}
        >
          {language === 'FR' ? tag.name_fr : tag.name_en}
        </div>
      ))}
    </div>
  );
}
