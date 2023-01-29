import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";
import { __getSurveyQuestion } from "../../../../redux/modules/surveySlice";
import RoundButtonLarge from "../../../common/buttons/roundButtons/RoundButtonLarge";
import { fadeInFromLeftAnimation } from "../../../../styles/animations";

const CoverSurvey = () => {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.survey?.survey);
  const questionIdList = useSelector((state) => state.survey?.questionIdList);

  const totalTime = 5;
  const giftList = [
    {
      giftName: "치킨 쿠폰",
      giftIcon: "🍗",
    },
  ];

  const surveyStartClickHandler = () => {
    dispatch(__getSurveyQuestion(questionIdList[0]));
  };

  return (
    <Container>
      <Main>
        <h1>{survey?.title}</h1>
        <h5>{survey?.summary}</h5>

        <GiftContainer>
          <div>
            <h2>{giftList[0].giftIcon}</h2>
          </div>
          <p>
            <span>{totalTime}분</span>이면 &nbsp;
            <span> {giftList[0].giftName}</span> 응모 완료!
          </p>
        </GiftContainer>
        <h5>{survey?.endedAt}까지</h5>
      </Main>
      <Bottom>
        <RoundButtonLarge
          buttonValue="시작하기"
          width="28.3rem"
          onClick={surveyStartClickHandler}
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
  padding-top: 6.1rem;
  height: 20rem;

  text-align: center;
  h1 {
    margin: 0;
    ${fonts.Body1}
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    ${fadeInFromLeftAnimation}
  }
  h5:nth-of-type(1) {
    margin-top: 2rem;
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    ${fadeInFromLeftAnimation}
  }
  h5:nth-of-type(2) {
    margin-top: 5rem;
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    ${fadeInFromLeftAnimation}
  }
  @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 3rem;
    }
    h5:nth-of-type(1) {
      margin-top: 1.5rem;
      font-size: 2rem;
    }
    h5:nth-of-type(2) {
      margin-top: 2rem;
    }
  }
`;

const GiftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 16rem;
    height: 16rem;

    border-radius: 50%;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    h2 {
      margin: 0;
      font-size: 9rem;
    }
  }
  p {
    ${fonts.Body1}
    font-size: 1.3rem;
    background: ${({ theme }) => theme.subColor3};
    padding: 0.3rem 1.2rem;
    border-radius: 0.5rem;
    margin-left: 1rem;
    span {
      display: inline-block;
      font-weight: 600;
      font-size: 1.4rem;
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

export default CoverSurvey;
