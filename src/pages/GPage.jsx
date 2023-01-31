import React from "react";
import GoogleRedirectHandler from "../components/login/outh/GoogleRedirectHandler";

const gpage = () => {
  return (
    <div>
      <GoogleRedirectHandler />
      <h4>로그인 중...</h4>
    </div>
  );
};

export default gpage;
