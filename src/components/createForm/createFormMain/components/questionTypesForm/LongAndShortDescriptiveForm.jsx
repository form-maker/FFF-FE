import React, { useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import styled from "styled-components";

import {
  selectedFormType,
  fillOutQuestion,
} from "../../../../../redux/modules/createFormSlice";
import RoundButtonLarge from "../../../../common/buttons/roundButtons/RoundButtonLarge";
import fonts from "../../../../../styles/fonts";

const LongAndShortDescriptiveForm = () => {
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
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
          questionType: "SHORT_DESCRIPTIVE",
          questionTitle: "",
          questionSummary: "",
          answerList: [],
        })
      );
  }, []);

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
      <p>장문형과 단문형을 선택해 주세요</p>
      {questionType === "SHORT_DESCRIPTIVE" && (
        <p>
          * 예상 응답을 단어나 간결한 단문으로 받을 때만 사용해주세요. <br />
          예시) 사과 , 바나나 , 좋다 , 별로다.
        </p>
      )}
      {questionType === "LONG_DESCRIPTIVE" && (
        <p>최대 입력 가능 글자수는 500자입니다</p>
      )}
      <RoundButtonLarge
        buttonValue="단문형"
        width="28.3rem"
        onClick={() => {
          typeClickHandler("SHORT_DESCRIPTIVE");
        }}
        backgroundColor={
          questionType === "SHORT_DESCRIPTIVE" && "subHoverColor1"
        }
      />
      <RoundButtonLarge
        buttonValue="장문형"
        소
        width="28.3rem"
        margin="1rem 0 0 0"
        onClick={() => {
          typeClickHandler("LONG_DESCRIPTIVE");
        }}
        backgroundColor={
          questionType === "LONG_DESCRIPTIVE" && "subHoverColor1"
        }
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    margin: 1rem 0 1rem 0;
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    &:nth-child(2) {
      color: ${({ theme }) => theme.gray8};
      font-size: 1.4rem;
      margin: 0 0 2rem 0;
      text-align: center;
    }
  }
`;

export default LongAndShortDescriptiveForm;
