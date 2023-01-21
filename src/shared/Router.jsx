import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Layout from "../layout/Layout";
import KakaoRedirectHandler from "../components/login/outh/KakaoRedirectHandler";
import CreateForm from "../pages/CreateForm";
import Survey from "../pages/Survey";
import { darkTheme, lightTheme } from "../styles/theme";
import { useSelector } from "react-redux";
import GoogleRedirectHandler from "../components/login/outh/GoogleRedirectHandler";
import MyPage from "../pages/MyPage";
import Stats from "../pages/Stats";

const Router = () => {
  const darkMode = useSelector((state) => state.darkTheme.darkTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/stats/:surveyId" element={<Stats />} />
          </Route>
          <Route path="/createform" element={<CreateForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/kakao" element={<KakaoRedirectHandler />} />
          <Route
            path="/api/user/oauth/google"
            element={<GoogleRedirectHandler />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
