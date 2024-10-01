import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "cache",
  initialState: {
    searchquery: "",
  },

  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
    addsearchQuery: (state, action) => {
      state.searchquery = action.payload;
    },
  },
});

export const { cacheResults, addsearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
