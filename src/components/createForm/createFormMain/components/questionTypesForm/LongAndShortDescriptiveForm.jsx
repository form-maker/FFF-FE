import React, { useEffect, useState } from "react";
import { useDispatch, batch } from "react-redux";
import styled from "styled-components";
import RoundButtonLarge from "../../../../common/buttons/roundButtons/RoundButtonLarge";
import { useSelector } from "react-redux";
import {
  selectedFormType,
  fillOutQuestion,
} from "../../../../../redux/modules/createFormSlice";

const LongAndShortDescriptiveForm = () => {
  const dispatch = useDispatch();
  // 현재 타입
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  // 현재 페이지 넘버
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
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
          questionType: "ShortDescriptive",
          questionTitle: "",
          questionSummary: "",
          answerList: [],
        })
      );
  }, []);

  // 내부에서 형식을 바꿨을 때
  const typeClickHandler = (type) => {
    batch(() => {
      dispatch(
        fillOutQuestion({
          questionType: type,
        })
      );
      dispatch(selectedFormType(type));
    });
  };

  return (
    <Container>
      <RoundButtonLarge
        buttonValue="단문형"
        width="30rem"
        onClick={() => {
          typeClickHandler("ShortDescriptive");
        }}
        backgroundColor={questionType === "ShortDescriptive" && "blue"}
      />
      <RoundButtonLarge
        buttonValue="장문형"
        소
        width="30rem"
        margin="1rem 0 0 0"
        onClick={() => {
          typeClickHandler("LongDescriptive");
        }}
        backgroundColor={questionType === "LongDescriptive" && "blue"}
      />
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

export default LongAndShortDescriptiveForm;
