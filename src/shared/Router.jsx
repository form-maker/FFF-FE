import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Layout from "../layout/Layout";
import Oauth2RedirectHandler from "../components/login/outh/Oauth2RedirectHandler";
import CreateForm from "../pages/CreateForm";
import Survey from "../pages/Survey";
import { darkTheme, lightTheme } from "../styles/theme";
import { useSelector } from "react-redux";


const Router = () => {
  const darkMode = useSelector((state) => state.darkTheme.darkTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/login/kakao" element={<Oauth2RedirectHandler />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createform" element={<CreateForm />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
