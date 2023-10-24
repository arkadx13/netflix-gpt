import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addTopRatedMovies(response?.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
