import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import fonts from "../../../styles/fonts";

const SingleChoiceAnswer = () => {
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );

  const answerList = useSelector(
    (state) =>
      state.createForm.formList.questionList[currentPageNum - 2]["answerList"]
  );

  return (
    <Container>
      <CommentContainer>
        <p>중복선택 불가</p>
      </CommentContainer>
      <ButtonBox>
        {answerList?.map((answer, index) => {
          return (
            <button key={index}>
              {index + 1}. {answer}
            </button>
          );
        })}
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 26.5rem;
  margin-top: 3rem;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 26.5rem;
    display: flex;
    align-items: center;
    padding: 1.2rem;
    margin: 0.85em 0;
    border: none;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.subColor1};
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  p {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0;
  }
`;

export default SingleChoiceAnswer;
