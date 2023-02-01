import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURLApi } from "../../../core/api";
import fonts from "../../../styles/fonts";

const LoginInputScreen = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);

  const showPasswordhandler = () => {
    setHidePassword(!hidePassword);
  };

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

  const submihandler = (e) => {
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
        localStorage.setItem("Authorization", res.headers.authorization);
        localStorage.setItem(
          "REFRESH_Authorization",
          res.headers.refresh_authorization
        );
        navigate(`/`);
      }
    });
  };

  return (
    <>
      <LoginidLabel>
        <Idinput
          placeholder="   아이디"
          name="loginId"
          type="text"
          onChange={(e) => {
            const { value } = e.target;
            setLoginId(value);
          }}
        ></Idinput>
      </LoginidLabel>
      <LoginPwLabel>
        <Pwinput
          placeholder="   비밀번호"
          type={!hidePassword ? "password" : "text"}
          name="password"
          onChange={(e) => {
            const { value } = e.target;
            setPassword(value);
          }}
        ></Pwinput>
        <img
          alt="paaword"
          onClick={showPasswordhandler}
          src={hidePassword ? "img/open eye.png" : "img/closeeye.png"}
        />
      </LoginPwLabel>
      <ButtonBox
        onClick={(event) => {
          submihandler(event);
        }}
      >
        로그인
      </ButtonBox>
    </>
  );
};

export default LoginInputScreen;

const LoginidLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  width: 310px;
  height: 40px;
  margin-bottom: 25px;
`;

const Idinput = styled.input`
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
`;

const LoginPwLabel = styled.div`
  display: flex;
  width: 310px;
  height: 40px;
  border: none;
  border-radius: 11px;
  background-color: rgb(238, 238, 238, 0.55);
  img {
    width: 15px;
    height: 15px;
    padding-right: 10px;
    padding-top: 15px;
    filter: opacity(0.5) drop-shadow(0 0 0 #c9c9c9);
  }
`;

const Pwinput = styled.input`
  font-size: 12px;
  width: 300px;
  height: 30px;
  padding-left: 10px;
  padding-top: 5px;
  background-color: transparent;
  color: #9e9e9e;
  border: none;
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
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  ${fonts.Body1}
`;
