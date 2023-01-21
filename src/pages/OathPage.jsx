import React from "react";
import KakaoRedirectHandler from "../components/login/outh/KakaoRedirectHandler";

const OathPage = () => {
  return (
    <div>
      <KakaoRedirectHandler />
      <h4>로그인 중</h4>
    </div>
  );
};

export default OathPage;
