import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 pb-5">
      <h1 className="text-white font-bold text-lg md:text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
