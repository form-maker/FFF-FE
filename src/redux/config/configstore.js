import { configureStore } from "@reduxjs/toolkit";
import darkTheme from "../modules/themeSlice";
import mainCardList from "../modules/mainCardListSlice";
import createForm from "../modules/createFormSlice";

const store = configureStore({
  reducer: {
    darkTheme,
    mainCardList,
    createForm,
  },
});

export default store;
