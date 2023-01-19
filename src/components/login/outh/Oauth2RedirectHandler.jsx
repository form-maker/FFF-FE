import { useNavigate } from "react-router-dom";
import { kakao } from "../../../core/Social";

const Oauth2RedirectHandler = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");

  kakao(code).then((res) => {
    console.log(res);
    alert("카카오 로그인 성공!");
    localStorage.setItem("Authorization", res.headers.authorization);
    navigate("/");
  });
};

export default Oauth2RedirectHandler;
