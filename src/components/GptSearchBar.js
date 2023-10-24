import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoveTMDB = async (movie) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movieData.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, forward slash seperated like the example result given ahead. Example Result: Gadar/Sholay/Don/Golmaal/Koi Mil Gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult) {
      //error
    }

    console.log(gptResult.choices);
    const queryMovies = gptResult.choices?.[0]?.message?.content.split("/");

    const promiseArray = queryMovies.map((movie) => searchMoveTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: queryMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-2 py-1 m-3 col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          className="py-1 px-4 m-3 bg-red-700 text-white rounded-sm col-span-3 active:scale-95"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
