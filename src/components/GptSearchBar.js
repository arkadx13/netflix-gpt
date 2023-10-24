import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="px-2 py-1 m-3 col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="py-1 px-4 m-3 bg-red-700 text-white rounded-sm col-span-3">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
