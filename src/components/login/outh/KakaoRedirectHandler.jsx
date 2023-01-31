import { useNavigate } from "react-router-dom";
import { kakao } from "../../../core/Social";

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");

  kakao(code).then((res) => {
    if (res.status === 200) {
      console.log(res);
      alert("카카오 로그인 성공!");
      localStorage.setItem("Authorization", res.headers.authorization);
      navigate("/");
    } else {
      alert("카카오 로그인 실패 다시시도해 주세요.");
      navigate("/login");
    }
  });
};

export default KakaoRedirectHandler;
