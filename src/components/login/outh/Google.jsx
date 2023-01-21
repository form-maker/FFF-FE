import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { google } from "../../../core/Social";

const Google = () => {
  const navigate = useNavigate();

  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  google(code).then((res) => {
    console.log(res);
    localStorage.setItem("Authorization", res.headers.authorization);
    navigate("/");
  });
};

export default Google;
