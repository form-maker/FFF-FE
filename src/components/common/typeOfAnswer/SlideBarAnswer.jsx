import React, { useEffect, useState } from "react";
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

  const [marginLeft, setMarginLeft] = useState("");

  useEffect(() => {
    setMarginLeft(`${((+volume + +slideValue) * 29.1) / (+volume * 2 + 1)}rem`);
  }, [volume, slideValue]);

  return (
    <Container>
      {/* <InputValue> <div>{slideValue}</div> </InputValue> */}
      <PointerContainer marginLeft={marginLeft}>
        <img src={process.env.PUBLIC_URL + "/img/pointer.svg"} alt="pointer" />
      </PointerContainer>
      <SlideContainer>
        <Circle />
        <input
          type="range"
          min={-volume}
          max={volume}
          value={slideValue}
          step="1"
          onChange={inputHandler}
        />
        <Circle />
      </SlideContainer>
      <p>점수를 선택해주세요</p>
      {/* <VolumeLabelContainer>
        <div>{-volume}</div>
        <div>{volume}</div>
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
  margin-top: 11.1rem;
  input {
    -webkit-appearance: none;
    width: 24.7rem;
    height: 0.9rem;
    border-radius: 1.1rem;
    background: ${({ theme }) => theme.gray5};
    border: none;
    outline: none;
    margin: 0 2.4rem;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 1.2rem;
      height: 1.2rem;
      background: ${({ theme }) => theme.pointColor2};
      border-radius: 50%;
    }
    &::-webkit-slider-thumb:hover {
      background: ${({ theme }) => theme.mainHoverColor};
    }
  }
  p {
    ${fonts.Body3}
    margin-top: 1.9rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const PointerContainer = styled.div`
  width: 100%;
  margin-left: 5.2rem;
  margin-bottom: 0.9rem;
  img {
    width: 2.9rem;
    margin-left: ${({ marginLeft }) => marginLeft || "3rem"};
  }
`;

const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.gray6};
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
