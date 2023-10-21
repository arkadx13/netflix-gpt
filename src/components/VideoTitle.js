const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[30%] px-12 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="py-3 w-2/4">{description}</p>
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
