import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  let trailerMovie = movies[0];
  const { title, overview, id } = trailerMovie;

  return (
    <div>
      <VideoTitle title={title} description={overview} />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;
