import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURLApi, instanceApi } from "../../core/api";
import fonts from "../../styles/fonts";
import Header from "../../layout/Header";
import { da } from "date-fns/locale";
import Swal from "sweetalert2";

const SignUpScreen = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailNum, setEmailNum] = useState("");

  const [loginIdMessage, setLoginIdMassage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [isLoginId, setIsLoginId] = useState(false);
  const [isLoginIdCheck, setIsLoginIdCheck] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailNumCheck, setIsEmailNumCheck] = useState(false);
  const [isusername, setIsUserName] = useState(false);

  const [hidePassword, setHidePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef([]);

  const [inputs, setInputs] = useState({
    loginId: "",
    password: "",
    email: "",
    username: "",
  });

  //첫번째 비밀번호 보이기
  const ShowPasswordClickhandler = () => {
    setHidePassword(!hidePassword);
  };

  //두번째 비밀번호 보이기
  const ShowPasswordClickhandler2 = () => {
    setShowPassword(!showPassword);
  };

  //이메일 형식
  const EmailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,4}$/;

  //아이디 입력 이벤트
  const LoginIdChangehandler = (e) => {
    const loginIdRegex = /[a-z-0-9]{4,16}$/;
    const abc = e.target.value;
    setLoginId(abc);
    if (!loginIdRegex.test(abc)) {
      setLoginIdMassage(
        "영소문자 + 숫자 4자리 이상 16자리이하로 작성해주세요."
      );
      setIsLoginId(false);
    } else if (loginId.length >= 17) {
      setLoginIdMassage(
        "영소문자 + 숫자 4자리 이상 16자리이하로 작성해주세요."
      );
      setIsLoginId(false);
    } else {
      setLoginIdMassage("아이디 형식에 맞습니다.");
      setIsLoginId(true);
    }
  };

  //비밀번호 입력 이벤트
  const passwordChangehandler = (e) => {
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
  const passwordConfirmChangehandler = (e) => {
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
  const loginIdCheckClickhandler = (e) => {
    e.preventDefault();
    if (loginId.length === 0) {
      Swal.fire({
        text: "영문자 + 숫자 4자리이상 16자리이하로 입력해주세요.",
        icon: "warning",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
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
        Swal.fire({
          text: data.data.msg,
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });

        setIsLoginIdCheck(true);
      } else if (data.data.statusCode === 400) {
        alert(data.data.msg);
        setIsLoginIdCheck(false);
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
        alert(data.data.msg);
        setIsUserName(true);
      } else if (data.data.statusCode === 400) {
        alert(data.data.msg);
        setIsUserName(false);
      } else {
        alert(data.data.msg);
      }
      return data;
    } catch (error) {}
  };

  //유저이름 중복확인 버튼 이벤트
  const userCheckClickhandler = (e) => {
    e.preventDefault();
    if (username.length === 0) {
      Swal.fire({
        text: "한글자 이상 입력해 주세요",
        icon: "warning",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
      return;
    }
    userNameCheck({ username });
  };

  //유저이름 입력 이벤트
  const userNamChangeehandler = (e) => {
    setUserName(e.target.value);
  };

  //이메일 입력 이벤트
  const emailChangehandler = (e) => {
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
    if (email.length === 0) {
      Swal.fire({
        text: "이메일을 입력해 주세요",
        icon: "warning",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
      return;
    }
    try {
      const data = await baseURLApi.post(`user/mail-auth?email=${Email}`);
      if (data.data.statusCode === 200) {
        Swal.fire({
          text: "인증번호가 전송되었습니다.",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
        return data;
      } else if (data.data.statusCode === 400) {
        alert(data.data.msg);
      } else {
        Swal.fire({
          text: data.data.msg,
          icon: "warning",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
      }
    } catch (error) {}
  };

  //이메일 인증번호 버튼 이벤트
  const emailNumberClickhandler = (e) => {
    e.preventDefault();
    emailNumSend(email);
  };

  //이메일 인증번호 입력 이벤트
  const emailNumberChangehandler = (e) => {
    setEmailNum(e.target.value);
  };

  //이메일 인증번호 확인 통신
  const emailCodeCheck = async (Email, EmailNum) => {
    if (emailNum.length === 0) {
      Swal.fire({
        text: "인증번호를 입력해 주세요",
        icon: "warning",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
      return;
    }
    try {
      const data = await baseURLApi.post(
        `user/mail-auth/verify?email=${Email}&code=${EmailNum}`
      );
      if (data.data.statusCode === 200) {
        Swal.fire({
          text: "인증번호가 일치합니다. 계속 회원가입을 진행해 주세요.",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
        setIsEmailNumCheck(true);
        return data;
      } else if (data.data.statusCode === 400) {
        Swal({
          text: data.data.msg,
          icon: "warning",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
      } else {
        Swal({
          text: data.data.msg,
          icon: "warning",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
      }
    } catch (error) {}
  };

  //인증번호 확인 버튼
  const emailCheckNumberClickhandler = (e) => {
    e.preventDefault();
    emailCodeCheck(email, emailNum);
  };

  const postSignup = async (post) => {
    if (emailNum && passwordConfirm === null) {
      alert("빈칸을 입력해 주세요!");
    }
    try {
      const data = await baseURLApi.post("user/signup", post);
      if (data.data.statusCode === 200) {
        Swal.fire({
          text: data.data.msg,
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
        return data;
      } else if (data.data.statusCode === 400) {
        Swal({
          text: data.data.msg,
          icon: "warning",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
        return;
      } else {
        Swal({
          text: data.data.msg,
          icon: "warning",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
    if (!isLoginId) {
      setInputs({
        ...inputs,
        loginId: "",
      });
      inputRef.current[0].focus();
    } else if (!isPassword) {
      setInputs({
        ...inputs,
        password: "",
      });
      inputRef.current[1].focus();
    } else if (!isEmail) {
      setInputs({
        ...inputs,
        email: "",
      });
      inputRef.current[2].focus();
    } else if (!isusername) {
      setInputs({
        ...inputs,
        usename: "",
      });
      inputRef.current[3].focus();
    } else if (isEmailNumCheck && isPasswordConfirm === false) {
      alert("인증을 완료해주세요");
    }
    return;
  };

  const signupClickhandler = (e) => {
    e.preventDefault();
    postSignup({
      loginId,
      password,
      username,
      email,
    }).then((res) => {
      if (res === undefined) {
        navigate("/signup");
      } else {
        navigate("/login");
      }
    });
  };

  return (
    <>
      <Header />
      <ContainerBox>
        <Form>
          <Title>회원가입</Title>
          <Label>아이디</Label>
          <IdBox>
            <IdCheckBox>
              <Input
                name="loginId"
                value={loginId}
                ref={(el) => (inputRef.current[0] = el)}
                placeholder="아이디를 입력해 주세요"
                onChange={LoginIdChangehandler}
                type="text"
              ></Input>
              <CheckBox
                onClick={(event) => {
                  loginIdCheckClickhandler(event);
                }}
              >
                중복체크
              </CheckBox>
            </IdCheckBox>
            {loginId.length > 0 && (
              <Span style={{ color: isLoginId ? "#6BBBF3" : "red" }}>
                {loginIdMessage}
              </Span>
            )}
          </IdBox>

          <Label>비밀번호</Label>
          <PwTotalBox>
            <Pwbox>
              <input
                name="password"
                value={password}
                ref={(el) => (inputRef.current[1] = el)}
                placeholder="숫자+영문자+특수문자  8자리이상"
                type={!hidePassword ? "password" : "text"}
                onChange={passwordChangehandler}
              />
              <img
                alt="password"
                onClick={ShowPasswordClickhandler}
                src={hidePassword ? "img/open eye.png" : "img/closeeye.png"}
              />
            </Pwbox>
            {password.length > 0 && (
              <Span style={{ color: isPassword ? "#6BBBF3" : "red" }}>
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
                onChange={passwordConfirmChangehandler}
              />
              <img
                alt="password"
                onClick={ShowPasswordClickhandler2}
                src={showPassword ? "img/open eye.png" : "img/closeeye.png"}
              />
            </Pwbox>
            {passwordConfirm.length > 0 && (
              <Span
                style={{
                  color: isPasswordConfirm ? "#6BBBF3" : "red",
                }}
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
                  name="email"
                  value={email}
                  ref={(el) => (inputRef.current[2] = el)}
                  type="email"
                  placeholder="이메일"
                  onChange={emailChangehandler}
                ></Input>
                <CheckBox onClick={emailNumberClickhandler}>
                  인증번호 받기
                </CheckBox>
              </EmailNumChekBox>
              {email.length > 0 && (
                <Span style={{ color: isEmail ? "#6BBBF3" : "red" }}>
                  {emailMessage}
                </Span>
              )}
            </EmailNumCeek>
            <IdCheckBox>
              <IdCheckBox>
                <Input
                  onChange={emailNumberChangehandler}
                  type="text"
                  placeholder="인증번호"
                ></Input>
                <CheckBox onClick={emailCheckNumberClickhandler}>
                  인증번호 확인
                </CheckBox>
              </IdCheckBox>
            </IdCheckBox>
          </EmailBox>

          <Label>닉네임</Label>
          <InputBox>
            <Input
              name="username"
              value={username}
              ref={(el) => (inputRef.current[3] = el)}
              type="text"
              placeholder="닉네임을 작성해주세요"
              onChange={userNamChangeehandler}
            ></Input>
            <CheckBox
              onClick={(event) => {
                userCheckClickhandler(event);
              }}
            >
              중복체크
            </CheckBox>
          </InputBox>
          <ButtonBox type="submit" onClick={signupClickhandler}>
            가입하기
          </ButtonBox>
        </Form>
      </ContainerBox>
    </>
  );
};

export default SignUpScreen;

const ContainerBox = styled.div`
  padding: 4rem;
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
  padding: 4rem;
  margin-top: 120px;
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
  &:disabled {
    ${fonts.Body5}
  }
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
