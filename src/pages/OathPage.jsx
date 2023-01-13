import React from "react";
import Oauth2RedirectHandler from "../components/login/outh/Oauth2RedirectHandler";

const OathPage = () => {
  return (
    <div>
      <Oauth2RedirectHandler />
      <h4>로그인 중</h4>
    </div>
  );
};

export default OathPage;
