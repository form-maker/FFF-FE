import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  changeDescriptive,
  __getSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../../components/TurnAPageButtons";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const ShortDescriptiveSurvey = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const descriptive = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["descriptive"]
  );
  const questionIdList = useSelector((state) => state.survey.questionIdList);

  const answerHandler = (event) => {
    const answer = event.target.value;
    dispatch(changeDescriptive(answer));
  };

  const goNextPageHandler = () => {
    currentPageNum !== questionIdList.length + 1 &&
      setTimeout(() => {
        dispatch(__getSurveyQuestion(questionIdList[currentPageNum - 1]));
      }, 400);
  };

  return (
    <Container>
      <Title />
      <InputContainer>
        <div>
          <input
            value={descriptive}
            onChange={answerHandler}
            placeholder="20자 이내로 작성해주세요"
          ></input>
          {descriptive.length > 20 && (
            <p>20자 이내로 줄여주세요 (현 {descriptive.length}자)</p>
          )}
          {descriptive.length <= 20 && <p>{descriptive.length}자 작성</p>}
        </div>
      </InputContainer>
      {currentPageNum !== questionIdList.length + 1 && (
        <ButtonContainer>
          <RoundButtonMedium
            buttonValue="Picked"
            background="subColor1"
            onClick={() => {
              goNextPageHandler();
            }}
          ></RoundButtonMedium>
        </ButtonContainer>
      )}
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

  padding-top: 6.1rem;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 500px) {
    justify-content: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20rem;
  margin-top: 1rem;
  div {
    height: 5rem;
    text-align: center;
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

        color: ${({ theme }) => theme.gray4};
      }
    }
    p {
      font-weight: 700;
      font-size: 1.4rem;

      color: ${({ theme }) => theme.pointColor};
    }
  }
  @media screen and (min-width: 500px) {
    height: 10rem;
    margin-bottom: 2rem;
    div {
      input {
        width: 40rem;
        font-size: 1.8rem;
        &::placeholder {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 15rem;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default ShortDescriptiveSurvey;
