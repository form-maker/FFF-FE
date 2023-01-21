import { baseURLApi, instanceApi } from "./api";

export const kakao = async (post) => {
  console.log(post);
  try {
    const data = await baseURLApi.get(`/user/login/kakao?code=${post}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const google = async (ggg) => {
  console.log(ggg);
  try {
    const data = await baseURLApi.get(`user/login/google?code=${ggg}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
