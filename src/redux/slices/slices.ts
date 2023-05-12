import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
  },
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;
