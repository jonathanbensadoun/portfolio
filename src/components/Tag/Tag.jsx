export default function Tag({ data }) {
  return (
    <div className="flex  flex-wrap justify-center items-center  mt-4 md:pb-10">
      {data.map((tag) => (
        <div
          key={tag.id}
          className={`m-4 p-2 bg-purple-800 text-white rounded-md`}
          style={{ backgroundColor: tag.color }}
        >
          {tag.name_fr}
        </div>
      ))}
    </div>
  );
}
