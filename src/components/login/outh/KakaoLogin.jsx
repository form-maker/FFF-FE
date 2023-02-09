import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { kakao } from "../../../core/Social";

const KakaoLogin = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");

  kakao(code).then((res) => {
    if (res.status === 200) {
      console.log(res);
      Swal.fire({
        text: "카카오 로그인 성공!",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
      localStorage.setItem("Authorization", res.headers.authorization);
      navigate("/");
    } else {
      Swal.fire({
        text: "카카오 로그인 실패 다시시도해 주세요.",
        icon: "warning",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
      navigate("/login");
    }
  });
};

export default KakaoLogin;
