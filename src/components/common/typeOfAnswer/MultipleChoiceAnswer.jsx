import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MultipleChoiceAnswer = () => {
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );

  const answerList = useSelector(
    (state) =>
      state.createForm.formList.questionList[currentPageNum - 2]["answerList"]
  );

  return (
    <Container>
      <ButtonBox>
        {answerList?.map((answer, index) => {
          return (
            <button key={index}>
              {index + 1}. {answer}
            </button>
          );
        })}
      </ButtonBox>
      <CommentContainer>
        <p>최대 3개 선택 가능합니다</p>
      </CommentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 8rem;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 0.5rem 0;
    border: none;
    border-radius: 0.5rem;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default MultipleChoiceAnswer;
