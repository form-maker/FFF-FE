import React, { useEffect, useState } from "react";
import { batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

import { baseURLApi } from "../core/api";
import NoOutLineSmall from "../components/common/buttons/noOutLineButtons/NoOutLineSmall";
import NoOutLineMedium from "../components/common/buttons/noOutLineButtons/NoOutLineMedium";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await baseURLApi.get("user");
        setIsLogin(data.data ? data.data : false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    checkToken();
  }, [isLogin]);

  console.log(isLogin);

  return (
    <Container>
      <SubContainer>
        <div>
          <div>
            <NoOutLineMedium
              buttonValue="폼폼폼"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div>
            <NoOutLineSmall
              buttonValue="폼 제작하기"
              font="Body2"
              onClick={() => {
                isLogin
                  ? navigate("/createform")
                  : batch(() => {
                      Swal.fire({
                        text: "로그인 해주세요",
                        confirmButtonColor: "#7AB0FE",
                        confirmButtonText: "확인",
                      });
                      navigate("/login");
                    });
              }}
            />
          </div>

          {isLogin ? (
            <LoginContainer>
              <NoOutLineSmall
                buttonValue="마이페이지"
                onClick={() => {
                  navigate("/mypage");
                }}
                fontSize="1.3rem"
              />
              <span>⎮</span>
              <NoOutLineSmall
                buttonValue="로그아웃"
                onClick={() => {
                  batch(() => {
                    localStorage.removeItem("Authorization");
                    localStorage.removeItem("REFRESH_Authorization");
                    Swal.fire({
                      text: "로그아웃 완료",
                      confirmButtonColor: "#7AB0FE",
                      confirmButtonText: "확인",
                    });
                    setIsLogin(false);
                    navigate("/");
                  });
                }}
                fontSize="1.3rem"
              />
            </LoginContainer>
          ) : (
            <div>
              <NoOutLineSmall
                buttonValue="로그인"
                onClick={() => {
                  navigate("/login");
                }}
              />
              <NoOutLineSmall
                buttonValue="회원가입"
                onClick={() => {
                  navigate("/signup");
                }}
              />
            </div>
          )}
        </div>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: ${({ theme }) => theme.subColor1};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 8rem;
  max-width: 1200px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    &:nth-child(2) {
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0.1rem;
    height: 7rem;
  }
`;
const LoginContainer = styled.div`
  button {
    &:nth-child(1) {
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }
  span {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

export default Header;
