import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fadeInFromLeftAnimation } from "../../../../styles/animations";
import fonts from "../../../../styles/fonts";
import RoundButtonLarge from "../../../common/buttons/roundButtons/RoundButtonLarge";

const EndSurvey = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <img
          src={process.env.PUBLIC_URL + "/img/finishSurvey.svg"}
          alt="checkIcon"
        />
        <h1>
          설문에 응답해주셔서 <br />
          감사합니다.
        </h1>
      </Main>
      <Bottom>
        <RoundButtonLarge
          buttonValue="다른 설문 구경하기"
          width="28.3rem"
          onClick={() => navigate("/")}
        />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 500px) {
    align-items: center;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 5rem;
  text-align: center;
  img {
    width: 5rem;
  }
  h1 {
    margin-top: 2rem;
    ${fonts.Body1}
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 4rem;
    ${fadeInFromLeftAnimation}
  }
  @media screen and (min-width: 500px) {
    justify-content: center;
    padding-bottom: 0;
    img {
      width: 10rem;
    }
    h1 {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4.6rem;
  @media screen and (min-width: 500px) {
    padding-bottom: 5rem;
  }
`;

export default EndSurvey;
