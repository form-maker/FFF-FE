import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeAnswer } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../../components/TurnAPageButtons";

const SingleChoiceSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (answerNum) => {
    dispatch(changeAnswer(answerNum));
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
`;

const CommentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 5rem;
  p {
    margin: 0;
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  align-items: center;

  width: 26.5rem;
  padding: 1.2rem;
  margin: 0.6em 0;

  background: ${({ theme, background }) => theme[background]};
  border: none;
  border-radius: 1rem;

  cursor: pointer;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default SingleChoiceSurvey;
