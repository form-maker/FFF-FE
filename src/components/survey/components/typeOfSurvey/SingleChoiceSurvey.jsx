import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  changeAnswer,
  __getSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../../components/TurnAPageButtons";
import { batch } from "react-redux";

const SingleChoiceSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );
  const questionIdList = useSelector((state) => state.survey.questionIdList);

  const answerHandler = (answerNum) => {
    batch(() => {
      dispatch(changeAnswer(answerNum));
      currentPageNum !== questionIdList.length + 1 &&
        setTimeout(() => {
          dispatch(__getSurveyQuestion(questionIdList[currentPageNum - 1]));
        }, 1000);
    });
  };

  return (
    <Container>
      <Title />
      <CommentContainer>
        <p>*다중선택 불가</p>
      </CommentContainer>
      <ButtonBox>
        {question.answerList?.map((answer) => {
          return (
            <div key={answer.answerNum}>
              {selectedAnswerList.includes(+answer.answerNum) ? (
                <Button
                  id={answer.answerNum}
                  onClick={() => {
                    answerHandler(answer.answerNum);
                  }}
                  background="subHoverColor1"
                >
                  {answer.answerNum}. {answer.answerValue}
                  <span>Picked!</span>
                </Button>
              ) : (
                <Button
                  id={answer.answerNum}
                  onClick={() => {
                    answerHandler(answer.answerNum);
                  }}
                  background="subColor1"
                >
                  {answer.answerNum}. {answer.answerValue}
                </Button>
              )}
            </div>
          );
        })}
      </ButtonBox>

      <ArrowButtonContainer>
        <TurnAPageButtons />
      </ArrowButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 26.5rem;
  height: 100%;
  padding-top: 6.1rem;
  @media screen and (min-width: 500px) {
    justify-content: center;
    width: 40rem;
    padding: 0;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  p {
    margin: 0;
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
  @media screen and (min-width: 500px) {
    margin-top: 2rem;
    p {
      margin-top: 0;
      font-size: 1.8rem;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;
  font-weight: 500;
  span {
    color: ${({ theme }) => theme.backgroundColor};
    font-size: 1.6rem;
    font-weight: 800;
  }
  @media screen and (min-width: 500px) {
    margin-top: 2rem;
    justify-content: center;
    margin-bottom: 10rem;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 26.5rem;
  padding: 1.2rem;
  margin: 0.6em 0;

  background: ${({ theme, background }) => theme[background]};
  border: none;
  border-radius: 1rem;

  cursor: pointer;

  @media screen and (min-width: 500px) {
    font-size: 1.6rem;
    width: 40rem;
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default SingleChoiceSurvey;
