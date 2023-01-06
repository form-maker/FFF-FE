import { configureStore } from "@reduxjs/toolkit";
import darkTheme from "../modules/themeSlice";

const store = configureStore({
  reducer: {
    darkTheme,
  },
});

export default store;
