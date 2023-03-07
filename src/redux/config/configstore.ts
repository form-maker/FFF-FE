import { configureStore } from "@reduxjs/toolkit";

import signup from "../modules/signupSlice";
import darkTheme from "../modules/themeSlice";
import mainCardList from "../modules/mainCardListSlice";
import createForm from "../modules/createFormSlice";
import survey from "../modules/surveySlice";
import myPageCardList from "../modules/myPageListSlice";
import stats from "../modules/statsSlice";
import modal from "../modules/modalSlice";

// const rootReducer = combineReducers({});

const store = configureStore({
  reducer: {
    darkTheme,
    mainCardList,
    createForm,
    survey,
    signup,
    myPageCardList,
    stats,
    modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
