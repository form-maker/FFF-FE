import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

import { Slider } from "@material-ui/core";
import { Box } from "@material-ui/core";

const SlideBarAnswer = () => {
  const [slideVolume, setSlideVolume] = useState(2);
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const volume = useSelector(
    (state) =>
      state.createForm?.formList?.questionList[currentPageNum - 2]["volume"]
  );

  useEffect(() => {
    volume !== undefined && setSlideVolume(volume);
    console.log(slideVolume);
  }, [volume]);

  return (
    <Container>
      <Box sx={{ width: 300 }}>
        <Slider
          defaultValue={0}
          min={-slideVolume}
          max={+slideVolume}
          step={1}
          sx={{
            color: "palette.color",
          }}
          marks
          valueLabelDisplay="on"
        />
      </Box>

      <p>점수를 선택해주세요</p>
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

export default SlideBarAnswer;
