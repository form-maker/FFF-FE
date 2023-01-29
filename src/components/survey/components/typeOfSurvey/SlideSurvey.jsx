import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Slider } from "@material-ui/core";
import { Box } from "@material-ui/core";

import {
  changeAnswer,
  __getSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../../components/TurnAPageButtons";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const SlideSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const currentAnswer = useSelector(
    (state) =>
      state.survey.answer[currentPageNum - 2]["selectValue"][0] !== undefined &&
      state.survey.answer[currentPageNum - 2]["selectValue"][0]
  );
  const questionIdList = useSelector((state) => state.survey.questionIdList);

  useEffect(() => {
    dispatch(changeAnswer(0));
  }, [dispatch, currentPageNum]);

  const changeHandler = (event, newValue) => {
    dispatch(changeAnswer(newValue));
  };

  const goNextPageHandler = () => {
    currentPageNum !== questionIdList.length + 1 &&
      setTimeout(() => {
        dispatch(__getSurveyQuestion(questionIdList[currentPageNum - 1]));
      }, 400);
  };

  const leftRange = [];
  for (let i = -question.volume; i <= -1; i++) {
    leftRange.push(i);
  }

  const rightRange = [];
  for (let i = 1; i <= question.volume; i++) {
    rightRange.push(i);
  }

  return (
    <Container>
      <Title />
      <SlideContainer>
        <Box sx={{ width: 300 }}>
          <Slider
            defaultValue={0}
            min={-question.volume}
            max={+question.volume}
            step={1}
            sx={{
              color: "palette.color",
            }}
            marks
            valueLabelDisplay="on"
            onChange={changeHandler}
            value={currentAnswer}
          />
        </Box>
      </SlideContainer>
      <LabelContainer>
        <div>{question?.answerList[0]["answerValue"]}</div>
        <div>{question?.answerList[1]["answerValue"]}</div>
      </LabelContainer>
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

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 8rem 0.1rem 0 0;
  padding: auto;
  @media screen and (min-width: 500px) {
    margin-top: 2rem;
    justify-content: center;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 1rem;
  width: 31rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 15rem;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default SlideSurvey;
