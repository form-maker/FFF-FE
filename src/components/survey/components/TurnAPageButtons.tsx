import React from "react";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import styled from "styled-components";
import Swal from "sweetalert2";

import {
  getCover,
  __getBeforeSurveyQuestion,
  __getSurveyQuestion,
} from "../../../redux/modules/surveySlice";

const TurnAPageButtons = () => {
  const dispatch = useAppDispatch();
  const questionIdList = useAppSelector((state) => state.survey.questionIdList);
  const currentPageNum = useAppSelector((state) => state.survey.currentPageNum);
  const survey = useAppSelector((state) => state.survey.survey);

  const nextPageClickHandler = () => {
    currentPageNum === questionIdList.length + 1
      ? Swal.fire({
          text: "마지막 항목입니다",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        })
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
      {survey?.questionIdList &&
      currentPageNum !== survey?.questionIdList?.length + 1 ? (
        <img
          src={process.env.PUBLIC_URL + "/img/phoneRightArrow.svg"}
          alt="RightButton"
          onClick={nextPageClickHandler}
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "/img/disablePhoneRightArrow.svg"}
          alt="RightButton"
          onClick={() => {
            Swal.fire({
              text: "마지막 페이지입니다",

              confirmButtonColor: "#7AB0FE",
              confirmButtonText: "확인",
            });
          }}
        />
      )}
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 26.3rem;
  margin: 3rem auto 0 auto;
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
