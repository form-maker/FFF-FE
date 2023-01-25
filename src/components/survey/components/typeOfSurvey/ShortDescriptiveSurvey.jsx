import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeDescriptive } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../../components/TurnAPageButtons";

const ShortDescriptiveSurvey = () => {
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
        <input
          value={descriptive}
          onChange={answerHandler}
          placeholder="한문장으로 작성해주세요"
        ></input>
      </InputContainer>
      <ArrowButtonContainer>
        <TurnAPageButtons />
      </ArrowButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-top: 6.1rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 35rem;
  margin-top: 1rem;
  input {
    text-align: center;
    padding: 1.1rem;
    width: 27.3rem;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;

    border: none;
    border-bottom: 0.3rem solid ${({ theme }) => theme.pointColor};
    &::placeholder {
      ${fonts.Body1}
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default ShortDescriptiveSurvey;
