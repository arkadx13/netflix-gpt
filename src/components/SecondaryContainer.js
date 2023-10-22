import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;
  if (!movies) return;
  /* 
MovieList - Popular
  movieCard
MovieList - Now Playing
MovieList - Trending
MovieList - Horror

*/
  return (
    movies && (
      <div className="bg-gradient-to-b  bg-black">
        <div className="-mt-40 pb-40 relative z-20 pl-4">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
