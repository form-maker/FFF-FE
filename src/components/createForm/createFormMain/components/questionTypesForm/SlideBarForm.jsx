import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";
import { useSelector, useDispatch } from "react-redux";
import {
  fillOutQuestion,
  // fillOutQuestionAnswer,
} from "../../../../../redux/modules/createFormSlice";

const SlideBarForm = () => {
  // 슬라이드 기본값
  const [slideValue, setSlideValue] = useState(2);
  // 슬라이드 끝 이름
  // const [inputValue, setInputValue] = useState({
  //   leftLabel: "",
  //   rightLabel: "",
  // });
  // //
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const questionTitle = useSelector(
    (state) =>
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );
  const answerList = useSelector(
    (state) =>
      state.createForm.formList?.questionList[currentPageNum - 2]["answerList"]
  );

  const plusInputHandler = (event) => {
    setSlideValue(event.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    currentPageNum > 1 &&
      !questionTitle &&
      dispatch(
        // fillOutQuestion
        fillOutQuestion({
          questionType: "Slide",
          questionTitle: "",
          questionSummary: "",
          answerList: ["", ""],
        })
      );
  }, []);

  useEffect(() => {
    currentPageNum > 1 &&
      dispatch(
        fillOutQuestion({
          volume: slideValue,
        })
      );
  }, [dispatch, currentPageNum, slideValue]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    const answer = [...answerList];
    answer[+name] = value;
    // setInputValue({ ...inputValue, [name]: value });
    dispatch(
      // fillOutQuestionAnswer
      fillOutQuestion({
        answerList: answer,
      })
    );
  };

  return (
    <Container>
      <div>
        <p>선택지의 범위를 끌어당겨 선택해주세요</p>
        <RangeContainer>
          <InputValue>
            <div>{-slideValue}</div>
          </InputValue>
          <input
            type="range"
            min="-5"
            max="0"
            value={-slideValue}
            step="1"
            onChange={plusInputHandler}
          />
          <input
            type="range"
            min="0"
            max="5"
            value={slideValue}
            step="1"
            onChange={plusInputHandler}
          />
          <InputValue>
            <div>{slideValue}</div>
          </InputValue>
        </RangeContainer>
        <p>처음과 마지막 라벨에 들어갈 내용을 작성해주세요</p>
        <InputContainer>
          <div>{-slideValue}</div>
          <input
            value={answerList && answerList[0]}
            onChange={inputHandler}
            name="0"
            placeholder="처음 라벨에 들어갈 내용을 작성해주세요"
          />
        </InputContainer>
        <InputContainer>
          <div>{slideValue}</div>
          <input
            value={answerList && answerList[1]}
            onChange={inputHandler}
            name="1"
            placeholder="마지막 라벨에 들어갈 내용을 작성해주세요"
          />
        </InputContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    p {
      ${fonts.Body2}
    }
  }
`;

const RangeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  input {
    margin: 0;
    -webkit-appearance: none;
    width: 20rem;
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
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    transition: all 300ms ease-in-out;
    ${fonts.Body1}
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 3rem;
    height: 3rem;
    display: flex;
    color: white;
    ${fonts.Body2}
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.subColor};
    border-radius: 1.5rem;
  }
  input {
    font-size: 1.4rem;
    border: none;
    width: 100%;
    margin-top: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.fontColor};
  }
`;

export default SlideBarForm;
