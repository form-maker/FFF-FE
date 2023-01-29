import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  getCover,
  __getBeforeSurveyQuestion,
  __getSurveyQuestion,
} from "../../../redux/modules/surveySlice";

const TurnAPageButtons = () => {
  const dispatch = useDispatch();
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);

  const nextPageClickHandler = () => {
    currentPageNum === questionIdList.length + 1
      ? alert("마지막 항목입니다")
      : dispatch(__getSurveyQuestion(questionIdList[currentPageNum - 1]));
  };

  const goBackPageClickHandler = () => {
    currentPageNum === 2
      ? dispatch(getCover())
      : dispatch(__getBeforeSurveyQuestion(questionIdList[currentPageNum - 3]));
  };

  return (
    <ArrowContainer>
      <img
        src={process.env.PUBLIC_URL + "/img/phoneLeftArrow.svg"}
        alt="LeftButton"
        onClick={goBackPageClickHandler}
      />
      <div>
        {currentPageNum}/{questionIdList.length + 1}
      </div>
      <img
        src={process.env.PUBLIC_URL + "/img/phoneRightArrow.svg"}
        alt="RightButton"
        onClick={nextPageClickHandler}
      />
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 26.3rem;
  margin: 0 auto;
  img {
    &:nth-child(1) {
      width: 1.6rem;
      cursor: pointer;
    }
    &:nth-child(3) {
      width: 1.6rem;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 500px) {
    width: 26.3rem;
    padding: 0 3rem;
    img {
      &:nth-child(1) {
        width: 2.1rem;
      }
      &:nth-child(3) {
        width: 2.1rem;
      }
    }
    div {
      font-size: 1.5rem;
    }
  }
`;

export default TurnAPageButtons;
