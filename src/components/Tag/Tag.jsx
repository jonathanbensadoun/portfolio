import { useSelector } from 'react-redux';

/**
 * Tag component
 * @param {Object[]} data list of tags
 * @returns {JSX.Element} Tag component
 */
export default function Tag({ data }) {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  const language = useSelector((state) => state.project.language);
  return (
    <div className="flex  flex-wrap justify-center items-center  mb-4 lg:pb-4">
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
