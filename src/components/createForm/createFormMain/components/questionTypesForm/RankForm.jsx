import React, { useEffect, useState } from "react";
import { batch } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  deleteAnswer,
  fillOutQuestion,
} from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";

const RankForm = () => {
  const dispatch = useDispatch();
  const [questionInput, setQuestion] = useState("");
  const currentPageNum = useSelector(
    (state) => state.createForm?.currentPageNum
  );
  const answerList = useSelector(
    (state) =>
      state.createForm.formList?.questionList[currentPageNum - 2]["answerList"]
  );
  const questionTitle = useSelector(
    (state) =>
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );

  console.log(answerList);
  useEffect(() => {
    currentPageNum > 1 &&
      !questionTitle &&
      dispatch(
        fillOutQuestion({
          questionType: "RANK",
          questionTitle: "",
          questionSummary: "",
          answerList: [],
        })
      );
  }, []);

  useEffect(() => {
    setQuestion("");
  }, [currentPageNum]);

  const InputChangeHandler = (event) => {
    event.target.value?.length >= 20
      ? batch(() => {
          alert("20자까지 가능합니다");
          setQuestion(event.target.value);
        })
      : setQuestion(event.target.value);
  };

  const onKeyUp = (event) => {
    if (event.target.value.length !== 0 && event.key === "Enter") {
      submitTagItem();
    }
  };
  const submitTagItem = () => {
    answerList?.length >= 5
      ? alert("항목은 5개까지 추가 가능합니다")
      : dispatch(
          fillOutQuestion({ answerList: [...answerList, questionInput] })
        );
    setQuestion("");
  };

  return (
    <Container>
      <ChoiceContainer>
        <p>앤터를 눌러 항목을 추가할 수 있습니다</p>
        <InputContainer>
          <QuestionInput
            placeholder="질문을 작성해주세요"
            value={questionInput}
            onChange={InputChangeHandler}
            onKeyUp={onKeyUp}
          ></QuestionInput>
          <p>{questionInput?.length}자</p>
        </InputContainer>

        {answerList?.map((answer, index) => {
          return (
            <Question key={index}>
              <div>
                <span> {index + 1}</span>
                {answer}
              </div>
              <img
                src={process.env.PUBLIC_URL + "/img/circleClose.svg"}
                alt="circleClose"
                onClick={() => {
                  dispatch(deleteAnswer(index));
                }}
              />
            </Question>
          );
        })}
      </ChoiceContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
  width: 100%;
`;

const ChoiceContainer = styled.div`
  width: 50rem;
  p {
    ${fonts.Body2}
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.9rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const QuestionInput = styled.input`
  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.4rem;

  width: 100%;
  padding: 0.8rem 0;
  width: 95%;

  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
`;

const Question = styled.div`
  display: flex;
  align-items: center;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.9rem;

  padding: 0.2rem 0;
  margin-top: 0.2rem;
  width: 100%;

  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  div {
    flex: 1;
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.4rem;

    span {
      margin-right: 1rem;
      font-weight: 800;
      font-size: 1.6rem;
    }
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export default RankForm;
