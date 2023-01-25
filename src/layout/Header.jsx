import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
        setIsLogin(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    checkToken();
  }, [isLogin]);

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
            <NoOutLineSmall buttonValue="진행중인 폼" font="Body2" />
            <NoOutLineSmall
              buttonValue="폼 제작하기"
              font="Body2"
              onClick={() => {
                navigate("/createform");
              }}
            />
          </div>
          <div>
            {isLogin ? (
              <>
                <NoOutLineSmall
                  buttonValue="마이페이지"
                  onClick={() => {
                    navigate("/mypage");
                  }}
                  fontSize="1.3rem"
                />
                ⎮
                <NoOutLineSmall
                  buttonValue="로그아웃"
                  onClick={() => {
                    localStorage.removeItem("Authorization");
                    setIsLogin(false);
                    navigate("/");
                  }}
                  fontSize="1.3rem"
                />
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
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
  min-width: 800px;
  max-width: 1200px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 1rem;
  }
`;

export default Header;
