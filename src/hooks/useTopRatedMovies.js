import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addTopRatedMovies(response?.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
