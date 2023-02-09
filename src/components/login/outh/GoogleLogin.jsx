import { useNavigate } from "react-router-dom";
import { google } from "../../../core/Social";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = encodeURIComponent(params.get("code"));

  google(code).then((res) => {
    localStorage.setItem("Authorization", res.headers.authorization);
    navigate("/");
  });
};

export default GoogleLogin;
