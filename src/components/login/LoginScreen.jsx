import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURLApi } from "../../core/api";
import { Link } from "react-router-dom";

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const CLIENT_ID_G = process.env.REACT_APP_CLIENT_ID_G;
export const REDIRECT_URI_G = process.env.REDIRECT_URI_G;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID_G}&redirect_uri=${REDIRECT_URI_G}&response_type=code&scope=https://www.googleapis.com/auth/drive.metadata.readonly`;

const LoginScreen = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  //로그인 통신
  const Login = async (aaa) => {
    try {
      const data = await baseURLApi.post("user/login", aaa);
      console.log(data);
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
      alert("확인해라");
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
        localStorage.setItem("Authorization", res.headers.authorization, {
          path: "/",
          maxAge: 1800,
        });
      }
    });
  };

  //카카오 인가 코드 요청
  const ClickKakaoHandler = async (e) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  };

  //구글 인가코드 요청
  const ClickGoogleHandler = (e) => {
    e.preventDefault();
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <ContainerBox>
      <LoginForm>
        <title>로그인</title>
        <SubBox>
          <label>아이디</label>
          <input
            name="loginId"
            type="text"
            onChange={(e) => {
              const { value } = e.target;
              setLoginId(value);
            }}
          />
        </SubBox>
        <SubBox>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              const { value } = e.target;
              setPassword(value);
            }}
          />
        </SubBox>
        <ButtonBox>
          <button
            onClick={(event) => {
              submiHandler(event);
            }}
          >
            로그인
          </button>
        </ButtonBox>
        <SnsTitle>
          <h4>간편 로그인</h4>
        </SnsTitle>
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
        <ButtonBox>
          <Link to="/signup">아직 회원이 아니신가요?</Link>
        </ButtonBox>
      </LoginForm>
    </ContainerBox>
  );
};

export default LoginScreen;

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1100px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 130px 100px;
  border-radius: 10px;
  border: 2px solid black;

  title {
    font-size: 40px;
    margin: 30px 50px 20px 50px;
    padding: 50px 50px 20px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    margin: 15px 0 10px 0;
  }

  input {
    margin: 10px 10px 10px 10px;
    padding: 5px 0px 5px 0px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    height: 40px;
    width: 90px;
    margin: 5px 0 0 5px;
    flex-direction: row;
    cursor: pointer;
  }
`;

const SubBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

const SnsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;

const SnsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
  img {
    width: 35px;
    height: 35px;
  }
`;

const KakaoBtn = styled.button`
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 35px;
    height: 35px;
    border-radius: 60%;
  }
`;

const NaverBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35px;
    height: 35px;
  }
`;

const ButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
