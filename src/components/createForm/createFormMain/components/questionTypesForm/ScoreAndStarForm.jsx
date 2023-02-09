import React, { useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import styled from "styled-components";

import {
  selectedFormType,
  fillOutQuestion,
} from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";
import RoundButtonLarge from "../../../../common/buttons/roundButtons/RoundButtonLarge";

const ScoreAndStarForm = () => {
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
          questionType: "SCORE",
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
      <p>별점과 설문형을 선택해 주세요</p>
      <RoundButtonLarge
        buttonValue="점수 형식"
        width="28.3rem"
        onClick={() => {
          typeClickHandler("SCORE");
        }}
        backgroundColor={questionType === "SCORE" && "subHoverColor1"}
      />
      <RoundButtonLarge
        buttonValue="별점 형식"
        width="28.3rem"
        margin="1rem 0 0 0"
        onClick={() => {
          typeClickHandler("STAR");
        }}
        backgroundColor={questionType === "STAR" && "subHoverColor1"}
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
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

export default ScoreAndStarForm;
