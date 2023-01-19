import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import {
  pushAnswer,
  deleteAnswer,
  getCover,
} from "../../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import TurnAPageButtons from "../../components/TurnAPageButtons";

const MultipleChoiceSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (answerNum) => {
    if (selectedAnswerList !== [] && selectedAnswerList.includes(answerNum)) {
      dispatch(deleteAnswer(answerNum));
    } else {
      console.log(answerNum);
      dispatch(pushAnswer(answerNum));
    }
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

  return (
    <Container>
      <TitleContainer>
        <h1>{question.questionTitle}</h1>
        <h5>{question.questionSummary}</h5>
      </TitleContainer>
      <CommentContainer>
        <p>다중 선택 가능</p>
      </CommentContainer>
      <ButtonBox>
        {question.answerList?.map((answer) => {
          return (
            <Button
              key={answer.answerNum}
              id={answer.answerNum}
              onClick={() => {
                answerHandler(answer.answerNum);
              }}
              background={
                selectedAnswerList.includes(+answer.answerNum)
                  ? "subHoverColor1"
                  : "subColor1"
              }
            >
              {answer.answerNum}. {answer.answerValue}
            </Button>
          );
        })}
      </ButtonBox>

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
  width: 26.5rem;
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

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
  p {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 26.5rem;
  display: flex;
  align-items: center;
  padding: 1.2rem;
  margin: 0.6em 0;
  border: none;
  border-radius: 1rem;
  background: ${({ theme, background }) => theme[background]};
  cursor: pointer;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
`;

export default MultipleChoiceSurvey;
