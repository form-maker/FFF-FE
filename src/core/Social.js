import { baseURLApi } from "./api";
import { CLIENT_ID_G, CLIENT_SECRET_G } from "../constants/env";

export const kakao = async (post) => {
  try {
    const data = await baseURLApi.get(`/user/login/kakao?code=${post}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

export const google = async (bbb) => {
  console.log(bbb);
  try {
    const data = await baseURLApi.post(`/user/login/google?code=${bbb}`, {
      client_id: `${CLIENT_ID_G}`,
      client_secret: `${CLIENT_SECRET_G}`,
      code: bbb,
      grant_type: "authorization_code",
    });
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
