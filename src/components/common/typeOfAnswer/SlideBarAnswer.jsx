import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";

const SlideBarAnswer = () => {
  const [slideValue, setSlideValue] = useState(0);

  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const volume = useSelector(
    (state) =>
      state.createForm.formList.questionList[currentPageNum - 2]["volume"]
  );

  // const leftLabel = useSelector(
  //   (state) =>
  //     state.createForm.formList.questionList[currentPageNum - 2][
  //       "answerList"
  //     ][0]["answerValue"]
  // );
  // const rightLabel = useSelector(
  //   (state) =>
  //     state.createForm.formList.questionList[currentPageNum - 2][
  //       "answerList"
  //     ][1][["answerValue"]]
  // );

  const inputHandler = (event) => {
    setSlideValue(event.target.value);
  };

  return (
    <Container>
      <InputValue>
        <div>{slideValue}</div>
      </InputValue>
      <SlideContainer>
        <input
          type="range"
          min={-volume}
          max={volume}
          value={slideValue}
          step="1"
          onChange={inputHandler}
        />
      </SlideContainer>
      <VolumeLabelContainer>
        <div>{-volume}</div>
        <div>{volume}</div>
      </VolumeLabelContainer>
      {/* <VolumeLabelContainer>
        <div>{leftLabel}</div>
        <div>{rightLabel}</div>
      </VolumeLabelContainer> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  input {
    -webkit-appearance: none;
    width: 25rem;
    height: 2px;
    background: #4471ef;
    border: none;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      background: #eee;
      border: 2px solid #4471ef;
      border-radius: 50%;
    }
    &::-webkit-slider-thumb:hover {
      background: #4471ef;
    }
  }
`;

const InputValue = styled.div`
  color: #4471ef;
  text-align: center;
  font-weight: 600;
  line-height: 40px;
  height: 40px;
  overflow: hidden;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    transition: all 300ms ease-in-out;
    ${fonts.Body1}
  }
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const VolumeLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default SlideBarAnswer;
