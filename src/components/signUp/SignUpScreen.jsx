import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpScreen = () => {
  //const navigate = useNavigate();
  //const dispatch = useDispatch();
  return (
    <StcontainerBox>
      <StForm>
        <StTitle>회원가입</StTitle>
        <Stlabel>아이디</Stlabel>
        <StInput></StInput>
        <Stlabel>닉네임</Stlabel>
        <StInput></StInput>
        <Stlabel>이메일</Stlabel>
        <StInput></StInput>
        <Stlabel>비밀번호</Stlabel>
        <StInput></StInput>
        <Stlabel>비밀번호 확인</Stlabel>
        <StInput></StInput>
      </StForm>
    </StcontainerBox>
  );
};

export default SignUpScreen;

const StcontainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1100px;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 130px 100px;
  border-radius: 10px;
  border: 2px solid black;
`;

const StTitle = styled.div`
  font-size: 40px;
  margin: 30px 50px 20px 50px;
  padding: 50px 50px 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stlabel = styled.label`
  margin: 15px 0 10px 0;
`;

const StInput = styled.input`
  margin: 10px 10px 10px 0px;
  padding: 5px 0px 5px 0px;
  border: 2px solid black;
`;
