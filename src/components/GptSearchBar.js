import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  return (
    <div
      className="pt-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="w-1/2 ">
        <input
          ref={searchText}
          type="text"
          placeholder={language[langKey].gptSearchPlaceholder}
          className="p-4 m-4 w-[70%] border border-black text-left bg-teal-50"
        />
        <button className="py-3 px-5 bg-teal-700 text-lg text-white rounded-md">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
