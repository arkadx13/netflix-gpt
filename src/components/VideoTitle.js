const VideoTitle = ({ title, description }) => {
  const trimDescription =
    description.length > 500
      ? description.substring(0, 500) + " . . ."
      : description;

  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-t from-black w-full aspect-video">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="py-3 w-2/4">{trimDescription}</p>
      <div className="font-semibold">
        <button className="bg-white text-black  px-5 py-1 mr-2 rounded-sm  hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="bg-gray-500 bg-opacity-40  px-5 py-1 rounded-sm hover:bg-white hover:text-black">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
