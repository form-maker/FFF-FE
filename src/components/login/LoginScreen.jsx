import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import fonts from "../../styles/fonts";
import {
  CLIENT_ID,
  REDIRECT_URI,
  CLIENT_ID_G,
  REDIRECT_URI_G,
} from "../../constants/env";
import LoginInputScreen from "./logininput/LoiginInputScreen";
import Header from "../../layout/Header";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID_G}&redirect_uri=${REDIRECT_URI_G}&response_type=code&scope=email profile openid&access_type=offline`;

const LoginScreen = () => {
  //카카오 인가 코드 요청
  const ClickKakaohandler = async (e) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  };

  //구글 요청
  const ClickGooglehandler = async (e) => {
    e.preventDefault();
    window.location.href = GOOGLE_AUTH_URL;
  };

  //소셜 로그인 임시 조치
  const Clickhandler = (e) => {
    e.preventDefault();
    alert("카카오, 구글 로그인만 가능합니다.");
  };

  return (
    <>
      <Header />
      <ContainerBox>
        <LoginForm>
          <Title>Log In</Title>
          <SubTitle>
            로그인을 하시면 더욱 편리하게 사이트를 이용하실 수 있습니다.
          </SubTitle>
          <LoginInputScreen />
          <SnsTitle>소셜(간편) 로그인</SnsTitle>
          <SnsBox>
            <GoogleBtn onClick={ClickGooglehandler}>
              <img alt="GoogleLogin" src="img/Google.png" />
            </GoogleBtn>
            <KakaoBtn onClick={ClickKakaohandler}>
              <img alt="KakakoLogin" src="img/kakao.png" />
            </KakaoBtn>
            <NaverBtn onClick={Clickhandler}>
              <img alt="NaverLogin" src="img/btnG_naver.png" />
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
  margin-top: 4rem;
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
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

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
