import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";
import { useSelector, useDispatch } from "react-redux";
import { fillOutQuestion } from "../../../../../redux/modules/createFormSlice";

const RankForm = () => {
  const dispatch = useDispatch();
  // 입력값
  const [questionInput, setQuestion] = useState("");
  // 현재 페이지 넘버
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  // 답으로 체크할 항목
  const answerList = useSelector(
    (state) =>
      state.createForm.formList.questionList[currentPageNum - 2]["answerList"]
  );
  // 타이틀이 있을 때면 기존에 값이 있다 판단, 삭제 하면 안되기 때문에 체크 포인트로 사용
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
          questionType: "Rank",
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
      <QuestionInput
        placeholder="질문을 작성해주세요"
        value={questionInput}
        onChange={InputChangeHandler}
        onKeyUp={onKeyUp}
      ></QuestionInput>
      {answerList?.map((answer, index) => {
        return (
          <Question>
            <div>{index + 1}</div> {answer}
          </Question>
        );
      })}
      <CommentContainer>
        <p>앤터를 눌러 항목을 추가할 수 있습니다</p>
      </CommentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionInput = styled.input`
  font-size: 1.4rem;
  border: none;
  width: 51.5rem;
  margin-top: 1.5rem;
  margin-left: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
`;

const Question = styled.div`
  display: flex;
  padding: 0.6rem 1.5rem;
  ${fonts.Body2}
  background-color: ${({ theme }) => theme.sideColor1};
  margin-top: 1rem;
  width: 100%;
  border-radius: 1rem;
  div {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.8rem;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default RankForm;
