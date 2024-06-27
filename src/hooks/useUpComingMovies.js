import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  // fetching the data from the movie API and putting that data into the Store

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
