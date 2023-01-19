import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURLApi } from "../../core/api";
import { Link } from "react-router-dom";
import fonts from "../../styles/fonts";
import Google from "./outh/Google";
import { CLIENT_ID_G, REDIRECT_URI_G } from "../../constants/env";

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID_G}&redirect_uri=${REDIRECT_URI_G}&response_type=code&scope=https://www.googleapis.com/auth/drive.metadata.readonly`;

const LoginScreen = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);

  const toggle = () => {
    setHidePassword(!hidePassword);
  };

  //로그인 통신
  const Login = async (aaa) => {
    try {
      const data = await baseURLApi.post("user/login", aaa);
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
  const submiHandler = (e) => {
    e.preventDefault();
    if (loginId === "" || password === "") {
      alert("아이디, 비밀번호를 입력해 주세요!");
      return;
    }
    Login({
      loginId,
      password,
    }).then((res) => {
      if (res === undefined) {
        navigate(`/login`);
      } else {
        navigate(`/`);
        localStorage.setItem("Authorization", res.headers.authorization);
      }
    });
  };

  //카카오 인가 코드 요청
  const ClickKakaoHandler = async (e) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  };

  //구글 요청
  const ClickGoogleHandler = async (e) => {
    e.preventDefault();
    window.location.href = GOOGLE_AUTH_URL;
  };

  //구글 테스트
  const onGoogleSignIn = async (res) => {
    const { credential } = res;
    const result = await baseURLApi.post(
      `user/login/google?code=${credential}`
    );
  };
  return (
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
            onClick={toggle}
            src={hidePassword ? "img/open eye.png" : "img/closeeye.png"}
          />
        </SubBox2>
        <ButtonBox
          onClick={(event) => {
            submiHandler(event);
          }}
        >
          로그인
        </ButtonBox>
        <SnsTitle>소셜(간편) 로그인</SnsTitle>
        <SnsBox>
          <GoogleBtn onClick={ClickGoogleHandler}>
            <img src="img/g-logo.png" />
          </GoogleBtn>
          <KakaoBtn onClick={ClickKakaoHandler}>
            <img src="img/kakaotalk_sharing_btn_medium.png" />
          </KakaoBtn>
          <NaverBtn>
            <img src="img/btnG_naver.png" />
          </NaverBtn>
        </SnsBox>
        <SignUpBox>
          <Link to="/signup">아직 회원이 아니신가요?</Link>
        </SignUpBox>
        <Google />
      </LoginForm>
    </ContainerBox>
  );
};

export default LoginScreen;

const ContainerBox = styled.div`
  margin-top: 210px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 670px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 130px 100px;
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
    //color: #9e9e9e;
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
  ${fonts.Body2}
`;

const SnsBox = styled.div`
  width: 300px;
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
  img {
    width: 42px;
    height: 35px;
    border-radius: 70%;
  }
`;

const SnsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${fonts.Body2}
  margin-bottom: 25px;
`;

const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const KakaoBtn = styled.button`
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ececec;
  background-color: #ffe812;
`;

const NaverBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03c75a;
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
  color: #9E9E9E;
  text-decoration-line: underline;
`;
