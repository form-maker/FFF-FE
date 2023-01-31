import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";

const RankAnswer = () => {
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const answerList = useSelector(
    (state) =>
      state.createForm.formList?.questionList[currentPageNum - 2]["answerList"]
  );

  return (
    <Container>
      <CommentContainer>
        <p>중복선택 가능</p>
      </CommentContainer>
      <ButtonBox>
        {answerList?.map((answer, index) => {
          return (
            <button key={index}>
              {index ? index + 1 : 1}.{answer ? answer : "질문을 작성해주세요"}
            </button>
          );
        })}
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 26.5rem;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    align-items: center;

    padding: 1.2rem;
    margin: 0.4em 0;
    width: 26.5rem;

    background: ${({ theme }) => theme.subColor1};
    border: none;
    border-radius: 0.5rem;
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
`;

export default RankAnswer;
