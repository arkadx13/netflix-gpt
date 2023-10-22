import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  // fetching trailer video && updating the store with trailer video data
  const getMovieVideos = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        const filterOfficialTrailer = response.results.filter(
          (video) => video.name === "Official Trailer"
        );

        const trailer =
          filterOfficialTrailer.length !== 0
            ? filterOfficialTrailer[0]
            : response.results[0];

        dispatch(addTrailerVideo(trailer));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
