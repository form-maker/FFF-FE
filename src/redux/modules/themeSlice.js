import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

const themeSlice = createSlice({
  name: "darkTheme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});
export const {} = themeSlice.actions;
export default themeSlice.reducer;
