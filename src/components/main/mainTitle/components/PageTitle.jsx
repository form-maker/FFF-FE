import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";
import { baseURLApi } from "../../../../core/api";
import { batch } from "react-redux";

const PageTitle = () => {
  const navigate = useNavigate();
  const goCreateFormHandler = async () => {
    try {
      const { data } = await baseURLApi.get("user");
      !data.data
        ? batch(() => {
            alert("로그인을 해주세요");
            navigate("/");
          })
        : navigate("/createForm");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <BackgroundContainer>
        <div></div>
        <div></div>
      </BackgroundContainer>
      <h1>
        세상에서 가장
        <br /> 몽글몽글한 설문조사
      </h1>
      <p>설문에 참여하고 이벤트에 응모해 보세요</p>
      <ButtonContainer>
        <RoundButtonMedium buttonValue="설문 참여하기" margin="0 0.85rem 0 0" />
        <RoundButtonMedium
          buttonValue="설문 제작하기"
          margin="0 0 0 0.85rem"
          onClick={() => {
            goCreateFormHandler();
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20.3rem;
  padding-left: calc(50% + 11.2rem);
  position: relative;
  h1 {
    margin: 0;
    padding: 0;
    ${fonts.H3}
    font-size: 3.2rem;
    line-height: 4rem;
  }
  p {
    ${fonts.Body1}
    margin-top: 0.8rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

const BackgroundContainer = styled.div`
  div {
    position: absolute;
    left: 50%;
    width: 17.6rem;
    height: 17.6rem;
    filter: blur(60px);
    z-index: -1;

    &:nth-child(1) {
      background: ${({ theme }) => theme.subHoverColor3};
      margin-left: 21rem;
      top: 11.2rem;
    }
    &:nth-child(2) {
      background: ${({ theme }) => theme.pointColor};
      margin-left: 6.2rem;
      top: 18.4rem;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 4.4rem;
  display: flex;
`;

export default PageTitle;
