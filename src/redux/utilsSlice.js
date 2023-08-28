import { createSlice } from "@reduxjs/toolkit";

const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    isApple: false,
  },
  reducers: {
    moveToApple: (state) => {
      state.isApple = true;
    },
    moveToWindows: (state) => {
      state.isApple = false;
    },
  },
});

export const { moveToApple, moveToWindows } = utilsSlice.actions;
export default utilsSlice.reducer;
