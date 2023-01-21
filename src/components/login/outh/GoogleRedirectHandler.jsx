import React from "react";
import { useNavigate } from "react-router-dom";
import { google } from "../../../core/Social";

const GoogleRedirectHandler = () => {
  const navigate = useNavigate();

  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  google(code).then((res) => {
    console.log(res);
    localStorage.setItem("Authorization", res.headers.authorization);
    navigate("/");
  });
};

export default GoogleRedirectHandler;
