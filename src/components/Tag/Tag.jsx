import { useSelector } from 'react-redux';

export default function Tag({ data }) {
  const isLightMode = useSelector((state) => state.project.isLightMode);
  return (
    <div className="flex  flex-wrap justify-center items-center  mb-4 2xl:pb-4">
      {data.map((tag) => (
        <div
          key={tag.id}
          className={`mx-4 mt-6 p-2 bg-tagColor shadow-md bg-opacity-25   rounded-md text-sm sm:text-base ${
            isLightMode ? 'bg-tertiary' : 'bg-tertiaryDark'
          }`}
        >
          {tag.name_fr}
        </div>
      ))}
    </div>
  );
}
