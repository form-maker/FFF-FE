import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "../styles/theme";
import Spinner from "../components/common/Spinner";

const Main = React.lazy(() => import("../pages/Main"));
const Login = React.lazy(() => import("../pages/Login"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const Layout = React.lazy(() => import("../layout/Layout"));

const KakaoRedirectHandler = React.lazy(() =>
  import("../components/login/outh/KakaoRedirectHandler")
);
const GoogleRedirectHandler = React.lazy(() =>
  import("../components/login/outh/GoogleRedirectHandler")
);

const CreateForm = React.lazy(() => import("../pages/CreateForm"));
const Survey = React.lazy(() => import("../pages/Survey"));
const MyPage = React.lazy(() => import("../pages/MyPage"));
const Stats = React.lazy(() => import("../pages/Stats"));

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/stats/:surveyId" element={<Stats />} />
            </Route>
            <Route path="/createform" element={<CreateForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/kakao" element={<KakaoRedirectHandler />} />
            <Route path="/login/google" element={<GoogleRedirectHandler />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/survey" element={<Survey />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
