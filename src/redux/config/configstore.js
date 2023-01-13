import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signupSlice";

const store = configureStore({
  reducer: { signup: signup },
});

export default store;
