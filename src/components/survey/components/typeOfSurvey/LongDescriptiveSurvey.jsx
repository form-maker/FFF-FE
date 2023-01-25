import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeDescriptive } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../../components/TurnAPageButtons";

const LongDescriptiveSurvey = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const descriptive = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["descriptive"]
  );

  const answerHandler = (event) => {
    const answer = event.target.value;
    dispatch(changeDescriptive(answer));
  };

  return (
    <Container>
      <Title />
      <InputContainer>
        <textarea
          type="text"
          placeholder="꼼꼼하게 답해주세요"
          value={descriptive}
          onChange={answerHandler}
        ></textarea>
      </InputContainer>
      <ArrowButtonContainer>
        <TurnAPageButtons />
      </ArrowButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 6.1rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 5rem;
  textarea {
    box-sizing: border-box;

    width: 26.4rem;
    height: 23.7rem;
    padding: 1rem;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;

    background-color: transparent;
    color: ${({ theme }) => theme.gray2};
    border: ${({ theme }) => `2px solid ${theme.subColor1}`};
    border-radius: 1rem;

    scroll-behavior: auto;
    resize: none;
    &::placeholder {
      color: gray;
      text-align: center;
    }
    div {
      display: flex;
    }
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default LongDescriptiveSurvey;
