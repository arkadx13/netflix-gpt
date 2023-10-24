import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieData }) => {
  const { poster_path } = movieData;
  if (!poster_path) return null;
  return (
    <div className="my-3 mr-3 text-white">
      <div className="w-36">
        <img alt="movie-poster" src={IMG_CDN_URL + poster_path} />
      </div>
    </div>
  );
};

export default MovieCard;
