import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://www.pcworld.com/wp-content/uploads/2024/05/Netflix-Hintergrund-1.jpg?quality=50&strip=all"
          alt="bg"
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
