import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import styled from "styled-components";

import { changeAnswer } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";

const SingleChoiceSurvey = () => {
  const dispatch = useAppDispatch();
  const question = useAppSelector((state) => state.survey.question);
  const currentPageNum = useAppSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useAppSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (answerNum: number) => {
    dispatch(changeAnswer(answerNum));
  };

  return (
    <Container>
      <Title marginTop={""} />
      <Main>
        <CommentContainer>
          <p> 다중선택 불가</p>
        </CommentContainer>
        <ButtonBox>
          {question.answerList?.map((answer) => {
            return (
              <div key={answer.answerNum}>
                {selectedAnswerList.includes(+answer.answerNum) ? (
                  <Button
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
      </Main>
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
  padding-top: 4rem;
  @media screen and (min-width: 500px) {
    justify-content: center;
    width: 40rem;
    padding-top: 3rem;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }
  @media screen and (min-width: 500px) {
    p {
      margin-top: 0;
      font-size: 1.2rem;
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
    margin-top: 0.2rem;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 26.5rem;
  padding: 0.8rem;
  margin: 0.2em 0;

  background: ${({ theme, background }: { theme: any; background: string }) =>
    theme[background]};
  border: none;
  border-radius: 1rem;

  cursor: pointer;

  @media screen and (min-width: 500px) {
    font-size: 1.2rem;
    width: 40rem;
  }
`;

export default SingleChoiceSurvey;
