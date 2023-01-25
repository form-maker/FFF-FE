import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import { changeAnswer, getCover } from "../../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import TurnAPageButtons from "../../components/TurnAPageButtons";
import { Slider } from "@material-ui/core";
import { Box } from "@material-ui/core";

const SlideSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const currentAnswer = useSelector(
    (state) =>
      state.survey.answer[currentPageNum - 2]["selectValue"][0] !== undefined &&
      state.survey.answer[currentPageNum - 2]["selectValue"][0]
  );
  console.log(currentAnswer);

  const test = useSelector((state) => state.survey);
  console.log(test);

  useEffect(() => {
    dispatch(changeAnswer(0));
  }, [dispatch, currentPageNum]);

  const changeHandler = (event, newValue) => {
    dispatch(changeAnswer(newValue));
  };

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

  const leftRange = [];
  for (let i = -question.volume; i <= -1; i++) {
    leftRange.push(i);
  }

  const rightRange = [];
  for (let i = 1; i <= question.volume; i++) {
    rightRange.push(i);
  }

  return (
    <Container>
      <TitleContainer>
        <h1>{question.questionTitle}</h1>
        <h5>{question.questionSummary}</h5>
      </TitleContainer>
      <SlideContainer>
        <Box sx={{ width: 300 }}>
          <Slider
            defaultValue={0}
            min={-question.volume}
            max={+question.volume}
            step={1}
            sx={{
              color: "palette.color",
            }}
            marks
            valueLabelDisplay="on"
            onChange={changeHandler}
            value={currentAnswer}
          />
        </Box>
      </SlideContainer>
      <LabelContainer>
        <div>{question?.answerList[0]["answerValue"]}</div>
        <div>{question?.answerList[1]["answerValue"]}</div>
      </LabelContainer>
      <p>점수를 선택해주세요</p>
      <ArrowButtonContainer>
        <TurnAPageButtons
          currentPageNum={currentPageNum}
          questionLength={questionIdList.length + 1}
          goBackPageClickHandler={goBackPageClickHandler}
          nextPageClickHandler={nextPageClickHandler}
        />
      </ArrowButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 6.1rem;

  p {
    ${fonts.Body3}
    margin-top: 1.9rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    ${fonts.Body1}
    margin: 0;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  h5 {
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-top: 4.6rem;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20rem 0.1rem 0 0;
  padding: auto;
  input {
    -webkit-appearance: none;
    width: 24.7rem;
    height: 0.9rem;
    border-radius: 1.1rem;
    background: ${({ theme }) => theme.gray5};
    border: none;
    outline: none;
    margin: 0 2.4rem;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 1.2rem;
      height: 1.2rem;
      background: ${({ theme }) => theme.pointColor2};
      border-radius: 50%;
    }
    &::-webkit-slider-thumb:hover {
      background: ${({ theme }) => theme.mainHoverColor};
    }
  }
`;

const LabelContainer = styled.div`
  margin: 1rem 0 0 1rem;
  display: flex;
  width: 31rem;
  justify-content: space-between;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
`;

export default SlideSurvey;
