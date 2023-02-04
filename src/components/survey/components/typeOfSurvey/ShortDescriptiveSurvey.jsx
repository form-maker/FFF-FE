import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeDescriptive } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";

const ShortDescriptiveSurvey = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const descriptive = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["descriptive"]
  );

  const answerHandler = (event) => {
    const answer = event.target.value;
    dispatch(changeDescriptive(answer));
    descriptive.length > 20 && alert("20자 이내로 작성해주세요");
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
            maxLength={20}
          ></input>
          <p>20자 이내로 작성해주세요 ({descriptive.length}자)</p>
        </div>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 4rem;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 500px) {
    justify-content: center;
  }
`;

const InputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 5rem;
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

export default ShortDescriptiveSurvey;
