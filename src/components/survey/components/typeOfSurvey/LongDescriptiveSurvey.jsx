import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";

import { changeDescriptive } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";

const LongDescriptiveSurvey = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const descriptive = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["descriptive"]
  );

  const answerHandler = (event) => {
    const answer = event.target.value;
    dispatch(changeDescriptive(answer));
    descriptive.length === 500 &&
      Swal.fire({
        text: "500자 이내로 작성해주세요",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
  };

  return (
    <Container>
      <Title />
      <Main>
        <InputContainer>
          <div>
            <textarea
              type="text"
              placeholder="500자 이내로 답해주세요"
              value={descriptive}
              onChange={answerHandler}
              maxLength={500}
            ></textarea>
            <p>500자 이내로 작성해주세요 ({descriptive?.length}자)</p>
          </div>
        </InputContainer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  padding-top: 4rem;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 500px) {
    justify-content: center;
  }
`;
const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    textarea {
      box-sizing: border-box;

      width: 26.4rem;
      height: 22rem;
      padding: 1rem;

      ${fonts.Body1}
      font-weight: 600;
      font-size: 1.4rem;

      background-color: transparent;
      border: ${({ theme }) => `2px solid ${theme.subColor1}`};
      border-radius: 1rem;

      scroll-behavior: auto;
      resize: none;
      &::placeholder {
        color: ${({ theme }) => theme.gray4};
        text-align: center;
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
      textarea {
        width: 40rem;
        font-size: 1.4rem;
        &::placeholder {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default LongDescriptiveSurvey;
