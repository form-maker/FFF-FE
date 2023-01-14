import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signupSlice";

import darkTheme from "../modules/themeSlice";
import mainCardList from "../modules/mainCardListSlice";
import createForm from "../modules/createFormSlice";
import survey from "../modules/surveySlice";
import myPageCardList from "../modules/myPageListSlice";

const store = configureStore({
  reducer: {
    darkTheme,
    mainCardList,
    createForm,
    survey,
    signup,
    myPageCardList,
  },
});

export default store;
