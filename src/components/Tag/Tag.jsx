export default function Tag({ data }) {
  return (
    <div className="flex  flex-wrap justify-center items-center  mb-4 md:pb-4">
      {data.map((tag) => (
        <div
          key={tag.id}
          className={`mx-4 mt-6 p-2 bg-tagColor text-white rounded-md text-sm sm:text-base`}
        >
          {tag.name_fr}
        </div>
      ))}
    </div>
  );
}
