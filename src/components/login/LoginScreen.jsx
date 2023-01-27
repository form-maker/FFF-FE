import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURLApi } from "../../core/api";
import { Link } from "react-router-dom";
import fonts from "../../styles/fonts";
import {
  CLIENT_ID,
  REDIRECT_URI,
  CLIENT_ID_G,
  REDIRECT_URI_G,
} from "../../constants/env";
import Header from "../../layout/Header";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID_G}&redirect_uri=${REDIRECT_URI_G}&response_type=code&scope=email%20profile%20openid&access_type=offline`;

const LoginScreen = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);

  const showPasswordhandler = () => {
    setHidePassword(!hidePassword);
  };

  //로그인 통신
  const Login = async (login) => {
    try {
      const data = await baseURLApi.post("user/login", login);
      if (data.data.statusCode === 200) {
        alert("로그인 성공");
        return data;
      } else {
        alert("아이디, 비밀번호를 잘못입력했습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //로그인 버튼 이벤트
  const submitHandler = (e) => {
    e.preventDefault();
    if (loginId === "" || password === "") {
      alert("아이디, 비밀번호를 입력해 주세요!");
      return;
    }
    Login({
      loginId,
      password,
    }).then((res) => {
      console.log(res);
      if (res === undefined) {
        navigate(`/login`);
      } else {
        localStorage.setItem("Authorization", res.headers.authorization);
        localStorage.setItem(
          "REFRESH_Authorization",
          res.headers.refresh_authorization
        );
        navigate(`/`);
      }
    });
  };

  //카카오 인가 코드 요청
  const KakaoClickhandler = async (e) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  };

  //구글 요청
  const GoogleClickhandler = async (e) => {
    e.preventDefault();
    window.location.href = GOOGLE_AUTH_URL;
  };

  //소셜 로그인 임시 조치
  const Clickhandler = (e) => {
    e.preventDefault();
    alert("카카오 로그인만 가능합니다.");
  };

  return (
    <>
      {/* <Header /> */}
      <ContainerBox>
        <LoginForm>
          <Title>Log In</Title>
          <SubTitle>
            로그인을 하시면 더욱 편리하게 사이트를 이용하실 수 있습니다.
          </SubTitle>
          <SubBox1>
            <input
              placeholder="   아이디"
              name="loginId"
              type="text"
              onChange={(e) => {
                const { value } = e.target;
                setLoginId(value);
              }}
            />
          </SubBox1>
          <SubBox2>
            <input
              placeholder="   비밀번호"
              type={!hidePassword ? "password" : "text"}
              name="password"
              onChange={(e) => {
                const { value } = e.target;
                setPassword(value);
              }}
            />
            <img
              alt="password"
              onClick={showPasswordhandler}
              src={hidePassword ? "img/open eye.png" : "img/closeeye.png"}
            />
          </SubBox2>
          <ButtonBox
            onClick={(event) => {
              submitHandler(event);
            }}
          >
            로그인
          </ButtonBox>
          <SnsTitle>소셜(간편) 로그인</SnsTitle>
          <SnsBox>
            <GoogleBtn onClick={GoogleClickhandler}>
              <img alt="GoogleLogin" src="img/Google.png" />
            </GoogleBtn>
            <KakaoBtn onClick={KakaoClickhandler}>
              <img alt="KakakoLogin" src="img/kakao.png" />
            </KakaoBtn>
            <NaverBtn onClick={Clickhandler}>
              <img alt="NaverLogin" src="img/naver.png" />
            </NaverBtn>
          </SnsBox>
          <SignUpBox>
            <Link to="/signup">아직 회원이 아니신가요?</Link>
          </SignUpBox>
        </LoginForm>
      </ContainerBox>
    </>
  );
};

export default LoginScreen;

const ContainerBox = styled.div`
  margin: 80px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 340px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  button {
    height: 40px;
    width: 310px;
    flex-direction: row;
    cursor: pointer;
  }
`;

const Title = styled.title`
  ${fonts.Body1}
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const SubTitle = styled.a`
  width: 340px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  ${fonts.Body1}
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 55px;
`;

const SubBox1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  width: 310px;
  height: 40px;
  margin-bottom: 25px;
  input {
    position: absolute;
    font-size: 12px;
    width: 300px;
    height: 40px;
    margin: 10px 10px 10px 10px;
    padding-left: 10px;
    background-color: rgb(238, 238, 238, 0.55);
    ${fonts.Body1}
    border: none;
    border-radius: 11px;
  }
`;

const SubBox2 = styled.div`
  display: flex;
  width: 310px;
  height: 40px;
  border: none;
  border-radius: 11px;
  background-color: rgb(238, 238, 238, 0.55);
  input {
    font-size: 12px;
    width: 300px;
    height: 30px;
    padding-left: 10px;
    padding-top: 5px;
    background-color: transparent;
    color: #9e9e9e;
    border: none;
  }
  img {
    width: 15px;
    height: 15px;
    padding-right: 10px;
    padding-top: 15px;
    filter: opacity(0.5) drop-shadow(0 0 0 #c9c9c9);
  }
`;

const ButtonBox = styled.button`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bbe0fa;
  border: none;
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 75px;
  ${fonts.Body1}
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

const SnsBox = styled.div`
  width: 320px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 70px;
    height: 70px;
    border-radius: 70%;
    border: 1px solid #ececec;
    cursor: pointer;
  }
`;

const SnsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${fonts.Body2}
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #5e5e5e;
  margin-bottom: 25px;
`;

const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor};
  img {
    width: 42px;
    height: 35px;
  }
`;

const KakaoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ececec;
  background-color: #ffe812;
  img {
    width: 78px;
    height: 42px;
  }
`;

const NaverBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27d34a;
  border: 1px solid #ececec;
  border-radius: none;
  img {
    width: 32px;
    height: 35px;
  }
`;

const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 310px;
  flex-direction: row;
  margin-top: 50px;
  ${fonts.Body2}
  color:  #686868;
  font-size: 11px;
  text-decoration-line: underline;
`;
