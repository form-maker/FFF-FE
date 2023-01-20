import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __addSignup } from "../../redux/modules/signupSlice";
import { baseURLApi, instanceApi } from "../../core/api";
import fonts from "../../styles/fonts";
import { da, el } from "date-fns/locale";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginId, setLoginId] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailnum, setEmailNum] = useState("");

  const [loginIdMessage, setLoginIdMassage] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [isLoginId, setIsLoginId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isemail, setIsEmail] = useState(false);
  const [isLogindCheck, setLoginidCheck] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //첫번째 비밀번호 보이기
  const toggle = () => {
    setHidePassword(!hidePassword);
  };

  //두번째 비밀번호 보이기
  const toggle2 = () => {
    setShowPassword(!showPassword);
  };

  //이메일 형식
  const emailRegex =
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
  const PasswordChangeHandler = (e) => {
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
  const ChangePasswordConfirm = (e) => {
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
  const LoginIdCheckHandler = (e) => {
    e.preventDefault();
    if (loginId.length === 0) {
      alert("영문 대/소문자 6자리이상 입력해주세요.");
      return;
    } else {
    }
    LoginId({
      loginId,
    });
  };

  //아이디 중복 체크 통신
  const LoginId = async (bbb) => {
    try {
      const data = await instanceApi.get(
        `user/signup/loginid?loginId=${bbb.loginId}`
      );
      if (data.data.statusCode === 200) {
        alert(data.data.msg);
        setLoginidCheck(true);
      } else {
        alert("중복된 아이디입니다.");
      }
    } catch (error) {}
  };

  //유저이름 중복확인 통신
  const UsernameCheck = async (post) => {
    try {
      const data = await instanceApi.get(
        `user/signup/username?username=${post.username}`
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
  const onUserCheck = (e) => {
    e.preventDefault();
    if (username.length === 0) {
      alert("한글자 이상 입력해 주세요");
      return;
    }
    UsernameCheck({ username });
  };

  //유저이름 입력 이벤트
  const UsernamChangeeHandler = (e) => {
    setUserName(e.target.value);
  };

  //이메일 입력 이벤트
  const EmailChangeHandler = (e) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("올바른 이메일 형식이 아닙니다");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  };

  //이메일 인증번호 보내기 통신
  const EmailNum = async (g) => {
    try {
      const data = await baseURLApi.post(`user/mail-auth?email=${g}`);
      if (data.data.statusCode === 200) {
        alert("전송되었습니다.");
        return data;
      } else {
        alert(data.data.msg);
      }
    } catch (error) {}
  };

  //이메일 인증번호 버튼 이벤트
  const EmailNumber = (e) => {
    e.preventDefault();
    EmailNum(email);
  };
  //이메일 인증번호 입력 이벤트
  const EmailNumberChangeHandler = (e) => {
    setEmailNum(e.target.value);
  };

  //이메일 인증번호 확인 통신
  const Emailcode = async (email, emailnum) => {
    try {
      const data = await baseURLApi.post(
        `user/mail-auth/verify?email=${email}&code=${emailnum}`
      );
      if (data.data.statusCode === 200) {
        alert("인증번호가 일치합니다. 계속 회원가입을 진행해 주세요.");
      }
      if (data.data.statusCode === 400) {
        alert(data.data.msg);
      } else {
        alert("인증번호가 일치하지 않습니다");
      }
      return data;
    } catch (error) {}
  };

  //인증번호 확인 버튼
  const EmailCheckNumberHandeler = (e) => {
    e.preventDefault();
    Emailcode(email, emailnum);
  };

  //회원가입 버튼 온클릭
  const ClickSignupHandler = () => {
    if (
      emailnum.length &&
      loginId.length &&
      email.length &&
      username.length &&
      password.length === 0
    ) {
      alert("빈칸을 채워주세요.");
    } else {
      dispatch(__addSignup({ loginId, email, username, password }));
      alert("회원가입 완료 로그인 해주세요.");
      navigate(`/login`);
    }
  };

  return (
    <StcontainerBox>
      <StForm>
        <StTitle>회원가입</StTitle>
        <Stlabel>아이디</Stlabel>
        <IdBox>
          <IdCheckBox>
            <StInput
              placeholder="아이디를 입력해 주세요"
              onChange={LoginIdChangeHandler}
              type="text"
              //disabled={isLogindCheck}
            ></StInput>
            <CheckBox
              onClick={(event) => {
                LoginIdCheckHandler(event);
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

        <Stlabel>비밀번호</Stlabel>
        <PwTotalBox>
          <Pwbox>
            <input
              placeholder="숫자+영문자+특수문자  8자리이상"
              type={!hidePassword ? "password" : "text"}
              onChange={PasswordChangeHandler}
            />
            <img
              onClick={toggle}
              src={hidePassword ? "img/open eye.png" : "img/closeeye.png"}
            />
          </Pwbox>{" "}
          {password.length > 0 && (
            <Span
              className={`message ${isPassword} ? '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' : "안전한 비밀번호 입니다."`}
            >
              {passwordMessage}
            </Span>
          )}
        </PwTotalBox>
        <Stlabel>비밀번호 확인</Stlabel>
        <PwTotalBox>
          <Pwbox>
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="숫자+영문자+특수문자  8자리이상"
              onChange={ChangePasswordConfirm}
            />
            <img
              onClick={toggle2}
              src={showPassword ? "img/open eye.png" : "img/closeeye.png"}
            />
          </Pwbox>{" "}
          {passwordConfirm.length > 0 && (
            <Span
              className={`message ${isPasswordConfirm} ? '비밀번호가 일치합니다.' : '비밀번호가 틀려요. 다시 확인해주세요!'`}
            >
              {passwordConfirmMessage}
            </Span>
          )}
        </PwTotalBox>

        <Stlabel>이메일</Stlabel>
        <EmailBox>
          <EmailNumCeek>
            <EmailNumChekBox>
              <StInput
                type="email"
                placeholder="이메일"
                onChange={EmailChangeHandler}
              ></StInput>
              <CheckBox onClick={EmailNumber}>인증번호 받기</CheckBox>
            </EmailNumChekBox>
            {email.length > 0 && (
              <Span
                style={{ marginbottom: "10px" }}
                className={`message ${isemail} ? "올바른 이메일 형식입니다.": "이메일 형식이 아닙니다"`}
              >
                {emailMessage}
              </Span>
            )}
          </EmailNumCeek>
          <IdCheckBox>
            <IdCheckBox>
              <StInput
                onChange={EmailNumberChangeHandler}
                type="text"
                placeholder="인증번호"
              ></StInput>
              <CheckBox onClick={EmailCheckNumberHandeler}>
                인증번호 확인
              </CheckBox>
            </IdCheckBox>
          </IdCheckBox>
        </EmailBox>

        <Stlabel>닉네임</Stlabel>
        <InputBox>
          <StInput
            type="text"
            placeholder="별명을 작성해주세요"
            onChange={UsernamChangeeHandler}
          ></StInput>
          <CheckBox
            onClick={(event) => {
              onUserCheck(event);
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
              isemail &&
              isLogindCheck
            )
          }
          onClick={ClickSignupHandler}
        >
          가입하기
        </ButtonBox>
      </StForm>
    </StcontainerBox>
  );
};

export default SignUpScreen;

const StcontainerBox = styled.div`
  margin-top: 95px;
  width: 310px;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 130px 100px;
  justify-content: center;
  position: relative;
`;

const StTitle = styled.div`
  ${fonts.Body1}
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 95px;
  margin-bottom: 50px;
`;

const Stlabel = styled.label`
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
  margin-bottom: 45px;
`;
const StInput = styled.input`
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
  margin-bottom: 45px;
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
  margin-top: 50px;
  margin-bottom: 75px;
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
