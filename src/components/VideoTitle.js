const VideoTitle = ({ title, description }) => {
  const trimDescription =
    description.length > 500
      ? description.substring(0, 500) + " . . ."
      : description;

  return (
    <div className="flex md:inline-block text-right md:text-left pt-[45%] md:pt-[20%] px-12 absolute text-white bg-gradient-to-t from-black w-full aspect-video">
      <h1 className="font-bold text-base md:text-2xl mr-3 md:mr-0">{title}</h1>
      <p className="hidden md:inline-block py-3 w-2/4 opacity-70">
        {trimDescription}
      </p>
      <div className="font-semibold">
        <button className="text-sm md:text-base bg-white text-black px-2 md:px-5 py-1 mr-2 rounded-sm  hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 bg-opacity-40  px-5 py-1 rounded-sm hover:bg-white hover:text-black">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
