import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  //Picking random movie to play trailer
  let randomNum = Math.floor(Math.random() * 20);
  let trailerMovie = movies[randomNum];
  console.log("trailer:", trailerMovie);

  const { title, overview, id } = trailerMovie;

  return (
    <div>
      <VideoTitle title={title} description={overview} />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;
