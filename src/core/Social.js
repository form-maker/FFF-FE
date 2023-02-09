import Swal from "sweetalert2";
import { baseURLApi } from "./api";

export const kakao = async (post) => {
  try {
    const data = await baseURLApi.get(`/user/login/kakao?code=${post}`);
    return data;
  } catch (error) {
    Swal.fire({
      text: error.response.data.msg,
      icon: "warning",
      confirmButtonColor: "#7AB0FE",
      confirmButtonText: "확인",
    });
  }
};

export const google = async (ggg) => {
  try {
    const data = await baseURLApi.get(`user/login/google?code=${ggg}`);
    return data;
  } catch (error) {
    Swal.fire({
      text: error.response.data.msg,
      icon: "warning",
      confirmButtonColor: "#7AB0FE",
      confirmButtonText: "확인",
    });
  }
};
