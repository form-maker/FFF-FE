import React from "react";
import GoogleLoginHandler from "../components/login/outh/GoogleLoginHandler";

const gpage = () => {
  return (
    <div>
      <GoogleLoginHandler />
      <h4>로그인 중...</h4>
    </div>
  );
};

export default gpage;
