import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList key={index} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
