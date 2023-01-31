import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider, Box } from "@material-ui/core";
import styled from "styled-components";

import { fillOutQuestion } from "../../../../../redux/modules/createFormSlice";
import "./SlideBarForm.css";
import fonts from "../../../../../styles/fonts";

const SlideBarForm = () => {
  const dispatch = useDispatch();
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
  const [value, setValue] = useState([-2, 2]);

  useEffect(() => {
    currentPageNum > 1 &&
      !questionTitle &&
      dispatch(
        fillOutQuestion({
          questionType: "SLIDE",
          questionTitle: "",
          questionSummary: "",
          answerList: ["", ""],
        })
      );
  }, []);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    const answer = [...answerList];
    answer[+name] = value;
    dispatch(
      fillOutQuestion({
        answerList: answer,
      })
    );
  };

  const leftRange = [];
  for (let i = -5; i <= -1; i++) {
    leftRange.push(i);
  }

  const rightRange = [];
  for (let i = 1; i <= 5; i++) {
    rightRange.push(i);
  }

  const changeHandler = (event, newValue) => {
    const [newLeft, newRight] = newValue;
    const [Left, Right] = value;
    if (newRight !== Right) {
      setValue([-newRight, newRight]);
    }
    if (newLeft !== Left) {
      setValue([newLeft, -newLeft]);
    }
    dispatch(
      fillOutQuestion({
        volume: value[1],
      })
    );
  };

  return (
    <Container>
      <div>
        <RangeContainer>
          <Box sx={{ width: 500 }}>
            <Slider
              defaultValue={0}
              min={-5}
              max={5}
              step={1}
              sx={{
                color: "palette.color",
              }}
              marks
              valueLabelDisplay="on"
              value={value}
              onChange={changeHandler}
            />
          </Box>
        </RangeContainer>
        <RangeNumberContainer>
          <RangeBox>
            <LeftRangeContainer>
              {leftRange?.map((range) => {
                return <div>{range}</div>;
              })}
            </LeftRangeContainer>

            <div>0</div>
            <RightRangeContainer>
              {rightRange?.map((range) => {
                return <div>{range}</div>;
              })}
            </RightRangeContainer>
          </RangeBox>
        </RangeNumberContainer>
        <LabelContainer>
          {/* <p>왼쪽과 오른쪽에 들어갈 내용을 작성해 주세요</p> */}
          <InputContainer>
            <div>{value[0]}</div>
            <input
              value={answerList && answerList[0]}
              onChange={inputHandler}
              name="0"
              placeholder="왼쪽 라벨에 들어갈 내용을 작성해주세요"
            />
          </InputContainer>
          <InputContainer>
            <div>{value[1]}</div>
            <input
              value={answerList && answerList[1]}
              onChange={inputHandler}
              name="1"
              placeholder="오른쪽 라벨에 들어갈 내용을 작성해주세요"
            />
          </InputContainer>
        </LabelContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  div {
    p {
      ${fonts.Body2}
    }
  }
`;

const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 9rem;
  width: 56.4rem;
  input {
    -webkit-appearance: none;
    margin: 0;
    width: 45%;
    height: 1.1rem;

    background: #ececec;
    outline: none;
    border: none;
    border-radius: 1.1rem;
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
`;

const RangeNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RangeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1rem auto;
  width: 51rem;
`;

const LeftRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 21.2rem;
`;

const RightRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  p {
    margin-bottom: 1.9rem;
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4rem;
    height: 4rem;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.5rem;

    background: ${({ theme }) => theme.subColor1};
    border-radius: 1.5rem;
  }
  input {
    margin-top: 0.5rem;
    margin-left: 1.2rem;
    padding: 0.5rem;
    width: 26.6rem;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.8rem;

    text-align: center;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.gray5};
  }
`;

export default SlideBarForm;
