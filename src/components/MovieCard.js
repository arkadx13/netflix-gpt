import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieData }) => {
  const { title, overview, poster_path } = movieData;
  return (
    <div className="my-3 mr-3 text-white p-2 w-6/12">
      <div className="w-36">
        <img alt="movie-poster" src={IMG_CDN_URL + poster_path} />
      </div>
      {/* <h1 className="font-bold my-3 text-orange-300">{title}</h1> */}
      {/* <p>{overview}</p> */}
    </div>
  );
};

export default MovieCard;
