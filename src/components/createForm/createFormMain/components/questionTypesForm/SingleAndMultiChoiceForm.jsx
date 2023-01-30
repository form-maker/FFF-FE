import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import styled from "styled-components";

import {
  fillOutQuestion,
  selectedFormType,
} from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";

const SingleAndMultiChoiceForm = () => {
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  const [questionInput, setQuestion] = useState("");
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
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

  useEffect(() => {
    currentPageNum > 1 &&
      !questionTitle &&
      dispatch(
        fillOutQuestion({
          questionType: "SINGLE_CHOICE",
          questionTitle: "",
          questionSummary: "",
          answerList: [],
        })
      );
  }, []);

  useEffect(() => {
    setQuestion("");
  }, [currentPageNum]);

  const multiCheckHandler = (event) => {
    batch(() => {
      dispatch(
        selectedFormType(
          event.target.checked ? "MULTIPLE_CHOICE" : "SINGLE_CHOICE"
        )
      );
      dispatch(
        fillOutQuestion({
          questionType: event.target.checked
            ? "MULTIPLE_CHOICE"
            : "SINGLE_CHOICE",
        })
      );
    });
  };

  const InputChangeHandler = (event) => {
    setQuestion(event.target.value);
  };

  const onKeyUp = (event) => {
    if (event.target.value.length !== 0 && event.key === "Enter") {
      submitTagItem();
    }
  };
  const submitTagItem = () => {
    dispatch(fillOutQuestion({ answerList: [...answerList, questionInput] }));
    setQuestion("");
  };

  return (
    <Container>
      <ChoiceContainer>
        <p>앤터를 눌러 항목을 추가할 수 있습니다</p>
        <CheckContainer>
          <input
            type="checkbox"
            id="MULTIPLE_CHOICE"
            onClick={multiCheckHandler}
            checked={questionType === "MULTIPLE_CHOICE"}
          />
          <label htmlFor="MULTIPLE_CHOICE">
            <span>다중선택 허용</span>
          </label>
        </CheckContainer>
        <QuestionInput
          placeholder="질문을 작성해주세요"
          value={questionInput}
          onChange={InputChangeHandler}
          onKeyUp={onKeyUp}
        ></QuestionInput>
        {answerList?.map((answer, index) => {
          return (
            <Question>
              <div>
                <span> {index + 1}</span>
                {answer}
              </div>
              <img
                src={process.env.PUBLIC_URL + "/img/roundX.svg"}
                alt="xIcon"
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

  margin-top: 5rem;
  width: 100%;
`;

const ChoiceContainer = styled.div`
  width: 50rem;
  p {
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.9rem;
  input {
    display: none;
    &:checked + label {
      &::before {
        content: "";
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: ${({ theme }) => theme.mainColor};
        border-color: ${({ theme }) => theme.mainColor};
      }
    }
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    &::before {
      content: "";
      display: inline-block;
      width: 17px;
      height: 17px;

      border: 2px solid ${({ theme }) => theme.mainColor};
      border-radius: 4px;
      vertical-align: middle;
    }
    span {
      ${fonts.Body1}
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.9rem;
      margin-left: 1.6rem;
    }
  }
`;

const QuestionInput = styled.input`
  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;

  margin-top: 2.2rem;
  padding: 0.8rem 0;
  width: 100%;

  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
`;

const Question = styled.div`
  display: flex;
  align-items: center;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;

  padding: 0.2rem 0;
  margin-top: 1rem;
  width: 100%;

  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};

  div {
    flex: 1;
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    span {
      margin-right: 1rem;
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.9rem;
    }
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export default SingleAndMultiChoiceForm;
