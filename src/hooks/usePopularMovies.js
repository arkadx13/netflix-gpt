import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPopularMovies(response?.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
