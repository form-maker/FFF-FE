import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURLApi } from "../../core/api";
import { setCookies } from "../../shared/cookieControler";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

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
        setCookies("id", res.headers.authorization, {
          path: "/",
          maxAge: 22500,
        });
      }
    });
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
        <KakaoBtn>
          <a>
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" />
          </a>
        </KakaoBtn>
        <ButtonBox>
          <button
            onClick={() => {
              navigate(`/signup`);
            }}
          >
            회원가입
          </button>
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
const ButtonBox = styled.div`
  margin: 20px 0px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KakaoBtn = styled.div`
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
