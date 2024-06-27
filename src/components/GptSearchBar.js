import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "../utils/constants";

const API_KEY = GEMINI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // make a call to openAI API and get movie results

    const prompt =
      "Act as a Movie Recommendation System and suggest movies for the query" +
      searchText.current.value;

    const result = await model.generateContent(prompt);
  };

  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(gptResults.choices);
  // };

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
        <button
          className="py-3 px-5 bg-teal-700 text-lg text-white rounded-md"
          onClick={handleGptSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

{
  /**  const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={language[langKey]?.gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {language[langKey]?.search}
        </button>
      </form>

      ----
      * 
      * 
      */
}
