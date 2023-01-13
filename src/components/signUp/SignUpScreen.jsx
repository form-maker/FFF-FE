import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __addSignup } from "../../redux/modules/signupSlice";
import { instanceApi } from "../../core/api";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginId, setLoginId] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isLoginId, setIsLoginId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isemail, setIsEmail] = useState(false);
  const [isLogindCheck, setLoginidCheck] = useState(false);

  //이메일 형식
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,4}$/;

  //아이디 입력 이벤트
  const LoginIdChangeHandler = useCallback((e) => {
    const abc = e.target.value;
    setLoginId(abc);
    if (loginId.length === 0) {
      setIsLoginId(false);
    } else {
      setIsLoginId(true);
    }
  });

  //비밀번호 입력 이벤트
  const PasswordChangeHandler = useCallback(
    (e) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
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
    },
    [password]
  );

  //비밀번호 확인 이벤트
  const ChangePasswordConfirm = useCallback((e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    }
  });

  //아이디 중복체크 버튼 이벤트
  const LoginIdCheckHandler = (e) => {
    e.preventDefault();
    if (loginId.length === 0) {
      alert("아이디를 입력해주세요.");
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
        alert("사용가능한 아이디입니다.");
        setLoginidCheck(true);
      } else {
        alert("중복된 아이디입니다.");
      }
    } catch (error) {}
  };

  //유저이름 중복확인 통신
  const UsernameCheck = async (post) => {
    //console.log(post.username);
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
      alert("이름을 입력해 주세요");
      return;
    }
    UsernameCheck({ username });
  };

  //유저이름 입력 이벤트
  const UsernamChangeeHandler = useCallback((e) => {
    setUserName(e.target.value);
  });

  //이메일 입력 이벤트
  const EmailChangeHandler = useCallback((e) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("올바른 이메일 형식이 아닙니다");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  }, []);

  //로그인 버튼 온클릭
  const ClickLoginHandler = () => {
    navigate(`/login`);
  };

  //회원가입 버튼 온클릭
  const ClickSignupHandler = () => {
    dispatch(__addSignup({ loginId, email, username, password }));
    alert("회원가입 성공");
    navigate(`/login`);
  };

  return (
    <StcontainerBox>
      <StForm>
        <StTitle>회원가입</StTitle>
        <Stlabel>아이디</Stlabel>
        <StInput
          placeholder="아이디를 입력해 주세요"
          onChange={LoginIdChangeHandler}
          type="text"
          disabled={isLogindCheck}
        ></StInput>
        <button
          onClick={(event) => {
            LoginIdCheckHandler(event);
          }}
        >
          중복체크
        </button>
        <Stlabel>닉네임</Stlabel>
        <StInput
          type="text"
          placeholder="별명을 작성해주세요"
          onChange={UsernamChangeeHandler}
        ></StInput>
        <button
          onClick={(event) => {
            onUserCheck(event);
          }}
        >
          중복체크
        </button>
        <Stlabel>이메일</Stlabel>
        <StInput type="email" onChange={EmailChangeHandler}></StInput>
        <span
          className={`message ${isemail} ? "올바른 이메일 형식입니다.": "이메일 형식이 아닙니다"`}
        >
          {emailMessage}
        </span>
        <Stlabel>비밀번호</Stlabel>
        <StInput
          placeholder="숫자+영문자+특수문자  8자리이상"
          type="password"
          onChange={PasswordChangeHandler}
        ></StInput>
        <span
          className={`message ${isPassword} ? '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' : "안전한 비밀번호 입니다."`}
        >
          {passwordMessage}
        </span>
        <Stlabel>비밀번호 확인</Stlabel>
        <StInput
          type="password"
          placeholder="숫자+영문자+특수문자  8자리이상"
          onChange={ChangePasswordConfirm}
        ></StInput>
        {passwordConfirm.length > 0 && (
          <span
            className={`message ${isPasswordConfirm} ? '비밀번호가 일치합니다.' : '비밀번호가 틀려요. 다시 확인해주세요!'`}
          >
            {passwordConfirmMessage}
          </span>
        )}
        <button onClick={ClickLoginHandler}>뒤로가기</button>
        <button
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
          회원가입
        </button>
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
