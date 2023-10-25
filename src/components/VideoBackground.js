import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const trailerLink = `https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`;
  console.log("trailerLink:", trailerLink);

  useMovieTrailer(movie_id);

  return (
    <div className="bg-black w-full">
      <iframe
        className="w-full aspect-video pt-[25%] md:pt-0"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
