import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";

import {
  deleteAnswer,
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
    event.target.value?.length >= 20
      ? batch(() => {
          Swal.fire({
            text: "20자까지 가능합니다",
            confirmButtonColor: "#7AB0FE",
            confirmButtonText: "확인",
          });
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
      ? Swal.fire({
          text: "항목은 5개까지 추가 가능합니다",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        })
      : dispatch(
          fillOutQuestion({ answerList: [...answerList, questionInput] })
        );
    setQuestion("");
  };

  return (
    <Container>
      <ChoiceContainer>
        <CheckContainer>
          <p>앤터를 눌러 항목을 추가할 수 있습니다</p>
          <div>
            <input
              type="checkbox"
              id="MULTIPLE_CHOICE"
              onClick={multiCheckHandler}
              checked={questionType === "MULTIPLE_CHOICE"}
            />

            <label htmlFor="MULTIPLE_CHOICE">
              <span>다중선택 허용</span>
            </label>
          </div>
        </CheckContainer>
        <InputContainer>
          <QuestionInput
            placeholder="질문을 작성해주세요"
            value={questionInput}
            onChange={InputChangeHandler}
            onKeyUp={onKeyUp}
            maxLength={20}
          ></QuestionInput>
          <p>{questionInput?.length}자</p>
        </InputContainer>

        {answerList?.map((answer, index) => {
          return (
            <Question>
              <div>
                <span> {index + 1}</span>
                {answer}
              </div>
              <img
                src={process.env.PUBLIC_URL + "/img/circleClose.svg"}
                alt="xIcon"
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

  width: 100%;
`;

const ChoiceContainer = styled.div`
  width: 50rem;
  p {
    ${fonts.Body2}
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.9rem;
    margin: 0.2rem 0;
  }
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    display: none;
    &:checked + label {
      &::before {
        content: "✓";
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.8rem;
        ${fonts.Body1}
        color: ${({ theme }) => theme.mainColor};
        font-weight: 900;

        background-position: 50%;
        background-repeat: no-repeat;
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
      font-size: 1.2rem;
      line-height: 1.9rem;
      margin-left: 1rem;
    }
  }
`;

const QuestionInput = styled.input`
  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.4rem;

  padding: 0.4rem 0;
  width: 95%;

  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Question = styled.div`
  display: flex;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.4rem;

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

export default SingleAndMultiChoiceForm;
