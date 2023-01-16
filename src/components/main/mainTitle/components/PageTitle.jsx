import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const PageTitle = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackgroundContainer>
        <div></div>
        <div></div>
      </BackgroundContainer>
      <h1>세상의 폼폼폼</h1>
      <p>설문에 참여하고 이벤트에 응모해 보세요</p>
      <div>
        <RoundButtonMedium buttonValue="설문 참여하기" margin="0 0.85rem 0 0" />
        <RoundButtonMedium
          buttonValue="설문 제작하기"
          margin="0 0 0 0.85rem "
          onClick={() => {
            navigate("/createform");
          }}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20.3rem;
  padding-left: 72.2rem;
  position: relative;
  h1 {
    margin: 0;
    padding: 0;
    ${fonts.H2}
    font-size: 3.2rem;
    line-height: 4rem;
  }
  p {
    ${fonts.Body1}
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  left: 50%;
  z-index: -1;
  &:nth-child(1) {
    width: 17.6rem;
    height: 17.6rem;
  }
  &:nth-child(2) {
    top: 11.2rem;
    left: 102.2rem;
    width: 17.6rem;
    height: 17.6rem;
  }
`;

export default PageTitle;
