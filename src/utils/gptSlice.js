import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    // GptMovieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    // addGptMovieResults: (state, action) => {
    //   state.GptMovieResults = action.payload;
    // },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
