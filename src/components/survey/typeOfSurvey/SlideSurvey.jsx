import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { changeAnswer, getCover } from "../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../redux/modules/surveySlice";
import TurnAPageButtons from "../components/TurnAPageButtons";

const SlideSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  useEffect(() => {
    dispatch(changeAnswer(0));
  }, []);
  const answerHandler = (event) => {
    const { value } = event.target;
    dispatch(changeAnswer(+value));
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

  const [marginLeft, setMarginLeft] = useState("");

  useEffect(() => {
    setMarginLeft(
      `${
        ((+question.volume + +selectedAnswerList[0]) * 25.9) /
        (+question.volume * 2 + 1)
      }rem`
    );
  }, [question, selectedAnswerList]);

  return (
    <Container>
      <TitleContainer>
        <h1>{question.questionTitle}</h1>
        <h5>{question.questionSummary}</h5>
      </TitleContainer>
      <PointerContainer marginLeft={marginLeft}>
        <img src={process.env.PUBLIC_URL + "/img/pointer.svg"} alt="pointer" />
      </PointerContainer>
      <SlideContainer>
        <Circle />
        <input
          type="range"
          min={-question.volume}
          max={question.volume}
          // value={slideValue}
          step="1"
          onChange={answerHandler}
          defaultValue="0"
        />
        <Circle />
      </SlideContainer>
      <CommentContainer>
        <p>{[selectedAnswerList]}</p>
      </CommentContainer>
      <ArrowButtonContainer>
        <TurnAPageButtons
          currentPageNum={currentPageNum}
          questionLength={questionIdList.length}
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

const PointerContainer = styled.div`
  width: 26.5rem;
  margin-top: 11.1rem;
  img {
    width: 2.9rem;
    margin-left: ${({ marginLeft }) => marginLeft || "3rem"};
  }
`;

const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.gray6};
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
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
const CommentContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  p {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.4rem;
    margin: 0;
  }
`;
const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
`;

// const BottomContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: absolute;
//   bottom: 1rem;

//   div {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   button {
//     border: none;
//     background: none;
//     width: 6.2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0;
//     padding: 1.3rem 1.6rem;
//     color: ${({ theme }) => theme.mainColor};
//     ${fonts.H1}
//     cursor: pointer;
//   }
// `;
export default SlideSurvey;
