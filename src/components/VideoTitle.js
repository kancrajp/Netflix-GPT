import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className=" py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-red-800 hover:bg-opacity-80 hover:text-black text-white font-bold p-2 px-10 rounded-sm bg-opacity-80 cursor-pointer">
          Play
        </button>
        <button className="bg-gray-700 hover:bg-black mx-3 text-white font-bold p-2 px-10 rounded-sm bg-opacity-80 cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
