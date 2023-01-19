import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";
import {
  fillOutQuestion,
  selectedFormType,
  // fillOutQuestionAnswer,
} from "../../../../../redux/modules/createFormSlice";

const SingleAndMultiChoiceForm = () => {
  const dispatch = useDispatch();
  // 현재 타입
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  // 입력값
  const [questionInput, setQuestion] = useState("");
  // 현재 페이지 넘버
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  // 답으로 체크할 항목 리스트
  const answerList = useSelector(
    (state) =>
      state.createForm.formList.questionList[currentPageNum - 2]["answerList"]
  );
  // 타이틀이 있을때면 기존에 값이 있다 판단, 삭제 하면 안되기 때문에 체크 포인트로 사용
  const questionTitle = useSelector(
    (state) =>
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );
  // 처음 시작할 때 세팅 값
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

  // 페이지가 넘어가면 input값 초기화
  useEffect(() => {
    setQuestion("");
  }, [currentPageNum]);

  // 내부에서 타입 체크에 따라 변경
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
    console.log(questionType);
  };

  // answer 값 수정
  const InputChangeHandler = (event) => {
    setQuestion(event.target.value);
  };

  // 엔터 버튼 눌렀을 때
  const onKeyUp = (event) => {
    if (event.target.value.length !== 0 && event.key === "Enter") {
      submitTagItem();
    }
  };
  const submitTagItem = () => {
    dispatch(
      // fillOutQuestionAnswer
      fillOutQuestion({ answerList: [...answerList, questionInput] })
    );
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
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
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
        background-color: ${({ theme }) => theme.mainColor};
        border-color: ${({ theme }) => theme.mainColor};
        background-repeat: no-repeat;
        background-position: 50%;
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
  border: none;
  width: 100%;
  margin-top: 2.2rem;
  padding: 0.8rem 0;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  border: none;
  width: 100%;
  margin-top: 2.2rem;
  padding: 0.2rem 0;
  margin-top: 1rem;
  width: 100%;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  div {
    flex: 1;
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;

    span {
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.9rem;
      margin-right: 1rem;
    }
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export default SingleAndMultiChoiceForm;
