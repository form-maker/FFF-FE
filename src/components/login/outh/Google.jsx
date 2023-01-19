import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { google } from "../../../core/Social";

const Google = () => {
  const navigate = useNavigate();

  //let code = new URL(window.location.href).searchParams.get("code");
  //console.log(code);

  //google(aaa).then((res) => {
  //console.log(res);
  //localStorage.setItem("Authorization", res.headers.authorization);
  //navigate("/");
  //});
};

//   const navigate = useNavigate();

// console.log(response.googleId);
// console.log(response.tokenObj.access_token);
// console.log(response.xc.login_hint);
//const code = response.accessToken;
//const code = response.tokenObj.access_token;
//const code = response.googleId;
//const code = response.xc.access_token;
// google(id_token).then((res) => {
//   console.log(res);
//   //alert("1 로그인 성공!");
//   localStorage.setItem("Authorization", res.headers.authorization);
//   navigate("/");
// });
//   };
//   return (
//     <GoogleOAuthProvider clientId={clientid}>
//       <GoogleLogin
//         clientId={clientid}
//         onSuccess={(res) => console.log(res, "성공")}
//         onFailure={(res) => console.log(res, "실패")}
//         render={(renderProps) => (
//           <div
//             className="social_login_box google"
//             onClick={renderProps.onClick}
//           >
//             <div className="social_login_text_box">구글로 시작하기</div>
//             <div className="social_login_blank_box"> </div>
//           </div>
//         )}
//       />
//     </GoogleOAuthProvider>
//   );

export default Google;
