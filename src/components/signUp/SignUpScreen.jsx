import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __addSignup } from "../../redux/modules/signupSlice";
import { baseURLApi, instanceApi } from "../../core/api";
import fonts from "../../styles/fonts";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginId, setLoginId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailNum, setEmailNum] = useState("");

  const [loginIdMessage, setLoginIdMassage] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [isLoginId, setIsLoginId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isLogindCheck, setIsLoginidCheck] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //첫번째 비밀번호 보이기
  const ShowPasswordClickHandler = () => {
    setHidePassword(!hidePassword);
  };

  //두번째 비밀번호 보이기
  const ShowPasswordClickHandler2 = () => {
    setShowPassword(!showPassword);
  };

  //이메일 형식
  const EmailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,4}$/;

  //아이디 입력 이벤트
  const LoginIdChangeHandler = (e) => {
    const loginIdRegex = /[a-zA-z0-9]{4,16}$/;
    const abc = e.target.value;
    setLoginId(abc);
    if (!loginIdRegex.test(abc)) {
      setLoginIdMassage("4-12사이 영문 대/소문자 숫자조합");
      setIsLoginId(false);
    } else {
      setLoginIdMassage("사용가능한 아이디 입니다.");
      setIsLoginId(true);
    }
  };

  //비밀번호 입력 이벤트
  const passwordChangeHandler = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  //비밀번호 확인 이벤트
  const passwordConfirmChangeHandler = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    }
  };

  //아이디 중복체크 버튼 이벤트
  const loginIdCheckClickHandler = (e) => {
    e.preventDefault();
    if (loginId.length === 0) {
      alert("영문 대/소문자 6자리이상 입력해주세요.");
      return;
    } else {
    }
    loginIdGet({
      loginId,
    });
  };

  //아이디 중복 체크 통신
  const loginIdGet = async (Id) => {
    try {
      const data = await instanceApi.get(
        `user/signup/loginid?loginId=${Id.loginId}`
      );
      if (data.data.statusCode === 200) {
        alert(data.data.msg);
        setIsLoginidCheck(true);
      } else {
        alert("중복된 아이디입니다.");
      }
    } catch (error) {}
  };

  //유저이름 중복확인 통신
  const userNameCheck = async (Name) => {
    try {
      const data = await instanceApi.get(
        `user/signup/username?username=${Name.username}`
      );
      if (data.data.statusCode === 200) {
        alert("사용가능한 이름입니다.");
      } else {
        alert("중복된 이름입니다.");
      }
      return data;
    } catch (error) {}
  };

  //유저이름 중복확인 버튼 이벤트
  const userCheckClickHandler = (e) => {
    e.preventDefault();
    if (userName.length === 0) {
      alert("한글자 이상 입력해 주세요");
      return;
    }
    userNameCheck({ userName });
  };

  //유저이름 입력 이벤트
  const userNamChangeeHandler = (e) => {
    setUserName(e.target.value);
  };

  //이메일 입력 이벤트
  const emailChangeHandler = (e) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!EmailRegex.test(emailCurrent)) {
      setEmailMessage("올바른 이메일 형식이 아닙니다");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  };

  //이메일 인증번호 보내기 통신
  const emailNumSend = async (Email) => {
    try {
      const data = await baseURLApi.post(`user/mail-auth?email=${Email}`);
      if (data.data.statusCode === 200) {
        alert("인증번호가 전송되었습니다.");
        return data;
      } else {
        alert(data.data.msg);
      }
    } catch (error) {}
  };

  //이메일 인증번호 버튼 이벤트
  const emailNumberClickHandler = (e) => {
    e.preventDefault();
    emailNumSend(email);
  };
  //이메일 인증번호 입력 이벤트
  const emailNumberChangeHandler = (e) => {
    setEmailNum(e.target.value);
  };

  //이메일 인증번호 확인 통신
  const emailCodeCheck = async (Email, EmailNum) => {
    try {
      const data = await baseURLApi.post(
        `user/mail-auth/verify?email=${Email}&code=${EmailNum}`
      );
      if (data.data.statusCode === 200) {
        alert("인증번호가 일치합니다. 계속 회원가입을 진행해 주세요.");
        return data;
      } else {
        alert("인증번호가 일치하지 않습니다");
      }
    } catch (error) {}
  };

  //인증번호 확인 버튼
  const emailCheckNumberClickHandler = (e) => {
    e.preventDefault();
    emailCodeCheck(email, emailNum);
  };

  //회원가입 버튼 온클릭
  const signupClickHandler = () => {
    if (
      emailNum.length &&
      loginId.length &&
      email.length &&
      userName.length &&
      password.length === 0
    ) {
      alert("빈칸을 채워주세요.");
    } else {
      dispatch(__addSignup({ loginId, email, userName, password }));
      alert("회원가입 완료 로그인 해주세요.");
      navigate(`/login`);
    }
  };

  return (
    <ContainerBox>
      <Form>
        <Title>회원가입</Title>
        <Label>아이디</Label>
        <IdBox>
          <IdCheckBox>
            <Input
              placeholder="아이디를 입력해 주세요"
              onChange={LoginIdChangeHandler}
              type="text"
            ></Input>
            <CheckBox
              onClick={(event) => {
                loginIdCheckClickHandler(event);
              }}
            >
              중복체크
            </CheckBox>
          </IdCheckBox>{" "}
          {loginId.length > 0 && (
            <Span
              className={`message ${isLoginId} ? '"영문 대/소문자 6자리 이상으로 압력해주세요."' : "아이디 형식에 맞습니다."`}
            >
              {loginIdMessage}
            </Span>
          )}
        </IdBox>

        <Label>비밀번호</Label>
        <PwTotalBox>
          <Pwbox>
            <input
              placeholder="숫자+영문자+특수문자  8자리이상"
              type={!hidePassword ? "password" : "text"}
              onChange={passwordChangeHandler}
            />
            <img
              alt="password"
              onClick={ShowPasswordClickHandler}
              src={hidePassword ? "img/open eye.png" : "img/closeeye.png"}
            />
          </Pwbox>
          {password.length > 0 && (
            <Span
              className={`message ${isPassword} ? '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' : "안전한 비밀번호 입니다."`}
            >
              {passwordMessage}
            </Span>
          )}
        </PwTotalBox>
        <Label>비밀번호 확인</Label>
        <PwTotalBox>
          <Pwbox>
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="숫자+영문자+특수문자  8자리이상"
              onChange={passwordConfirmChangeHandler}
            />
            <img
              alt="password"
              onClick={ShowPasswordClickHandler2}
              src={showPassword ? "img/open eye.png" : "img/closeeye.png"}
            />
          </Pwbox>
          {passwordConfirm.length > 0 && (
            <Span
              className={`message ${isPasswordConfirm} ? '비밀번호가 일치합니다.' : '비밀번호가 틀려요. 다시 확인해주세요!'`}
            >
              {passwordConfirmMessage}
            </Span>
          )}
        </PwTotalBox>

        <Label>이메일</Label>
        <EmailBox>
          <EmailNumCeek>
            <EmailNumChekBox>
              <Input
                type="email"
                placeholder="이메일"
                onChange={emailChangeHandler}
              ></Input>
              <CheckBox onClick={emailNumberClickHandler}>
                인증번호 받기
              </CheckBox>
            </EmailNumChekBox>
            {email.length > 0 && (
              <Span
                className={`message ${isEmail} ? "올바른 이메일 형식입니다.": "이메일 형식이 아닙니다"`}
              >
                {emailMessage}
              </Span>
            )}
          </EmailNumCeek>
          <IdCheckBox>
            <IdCheckBox>
              <Input
                onChange={emailNumberChangeHandler}
                type="text"
                placeholder="인증번호"
              ></Input>
              <CheckBox onClick={emailCheckNumberClickHandler}>
                인증번호 확인
              </CheckBox>
            </IdCheckBox>
          </IdCheckBox>
        </EmailBox>

        <Label>닉네임</Label>
        <InputBox>
          <Input
            type="text"
            placeholder="별명을 작성해주세요"
            onChange={userNamChangeeHandler}
          ></Input>
          <CheckBox
            onClick={(event) => {
              userCheckClickHandler(event);
            }}
          >
            중복체크
          </CheckBox>
        </InputBox>
        <ButtonBox
          type="submit"
          disabled={
            !(
              isLoginId &&
              isPassword &&
              isPasswordConfirm &&
              isEmail &&
              isLogindCheck
            )
          }
          onClick={signupClickHandler}
        >
          가입하기
        </ButtonBox>
      </Form>
    </ContainerBox>
  );
};

export default SignUpScreen;

const ContainerBox = styled.div`
  margin: 10px auto;
  width: 310px;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Title = styled.div`
  ${fonts.Body1}
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  ${fonts.Body1}
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

const InputBox = styled.div`
  display: flex;
  width: 310px;
  height: 40px;
  border: none;
  margin-bottom: 30px;
`;
const Input = styled.input`
  border-radius: 11px;
  ${fonts.Body5}
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  width: 205px;
  height: 40px;
  padding-left: 10px;
  background-color: rgb(238, 238, 238, 0.55);
  color: #9e9e9e;
  border: none;
`;

const CheckBox = styled.button`
  width: 100px;
  height: 40px;
  background-color: #bbe0fa;
  border-radius: 20px;
  border: none;
  margin-left: 10px;
  ${fonts.Body1}
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
`;

const IdBox = styled.div`
  margin-bottom: 40px;
`;

const IdCheckBox = styled.div`
  display: flex;
  width: 310px;
  height: 40px;
  border: none;
`;

const PwTotalBox = styled.div`
  margin-bottom: 45px;
`;

const Pwbox = styled.div`
  display: flex;
  width: 310px;
  height: 40px;
  border: none;
  border-radius: 11px;
  background-color: rgb(238, 238, 238, 0.55);
  input {
    ${fonts.Body5}
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    width: 300px;
    height: 30px;
    padding-left: 10px;
    padding-top: 5px;
    background-color: transparent;
    color: #9e9e9e;
    border: none;
  }
  img {
    padding-top: 10px;
    padding-right: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    filter: opacity(0.5) drop-shadow(0 0 0 #c9c9c9);
  }
`;
const Span = styled.span`
  margin-top: 10px;
  position: absolute;
  ${fonts.Body1}
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const ButtonBox = styled.button`
  width: 310px;
  height: 40px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bbe0fa;
  border: none;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
  ${fonts.Body1}
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

const EmailBox = styled.div`
  margin-bottom: 50px;
`;

const EmailNumCeek = styled.div`
  margin-bottom: 30px;
`;

const EmailNumChekBox = styled.div`
  display: flex;
  width: 310px;
  height: 40px;
  border: none;
`;
