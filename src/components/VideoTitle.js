const VideoTitle = ({ title, description }) => {
  const trimDescription =
    description.length > 500
      ? description.substring(0, 500) + " . . ."
      : description;
  console.log("______VideoTitle (title):", title);
  console.log("______VideoTitle (desprition):", description);

  return (
    <div className="mt-[20%] md:mt-0 pt-[60%] md:pt-[20%] px-2 md:px-12 absolute text-white flex justify-end md:inline-block bg-gradient-to-t from-black w-full aspect-video">
      <h1 className="font-bold text-base md:text-2xl -mt-12 md:mt-0">
        {title}
      </h1>
      <p className="hidden md:inline-block py-3 w-2/4 opacity-70">
        {trimDescription}
      </p>
      <div className="font-semibold -mt-12 md:mt-0">
        <button className="bg-red-700 md:bg-white text-white md:text-black text-sm md:text-base px-2 md:px-5 py-1 mr-2 ml-2 md:ml-0 rounded-sm  hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 bg-opacity-40 px-5 py-1 rounded-sm hover:bg-white hover:text-black">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
