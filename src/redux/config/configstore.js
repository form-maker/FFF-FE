import { configureStore } from "@reduxjs/toolkit";
import darkTheme from "../modules/themeSlice";
import mainCardList from "../modules/mainCardListSlice";

const store = configureStore({
  reducer: {
    darkTheme,
    mainCardList,
  },
});

export default store;
