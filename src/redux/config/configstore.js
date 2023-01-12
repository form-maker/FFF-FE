import { configureStore } from "@reduxjs/toolkit";
import darkTheme from "../modules/themeSlice";
import mainCardList from "../modules/mainCardListSlice";
import createForm from "../modules/createFormSlice";
import survey from "../modules/surveySlice";

const store = configureStore({
  reducer: {
    darkTheme,
    mainCardList,
    createForm,
    survey,
  },
});

export default store;
