import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getUpcomingMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addUpcomingMovies(response?.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
