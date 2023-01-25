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

  margin-top: 11.6rem;
  width: 100%;
  p {
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

export default LongAndShortDescriptiveForm;
