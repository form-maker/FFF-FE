import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeAnswer } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import { fadeInFromBottomAnimation } from "../../../../styles/animations";

const StarSurvey = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (answer) => {
    dispatch(changeAnswer(answer));
  };

  const range = [];
  for (let i = 1; i <= 5; i++) {
    range.push(i);
  }

  return (
    <Container>
      <Title />
      <Main>
        <ScoreButtonContainer>
          {range.map((score) => {
            return (
              <div
                onClick={() => {
                  answerHandler(score);
                }}
                key={score}
              >
                {selectedAnswerList[0] > score && (
                  <img
                    src={process.env.PUBLIC_URL + "/img/fullStarIcon.svg"}
                    alt="starIcon"
                  />
                )}
                {selectedAnswerList.includes(score) && (
                  <Picked>
                    <div display={true}>Picked!</div>
                    <img
                      src={process.env.PUBLIC_URL + "/img/fullStarIcon.svg"}
                      alt="starIcon"
                    />
                  </Picked>
                )}
                {(selectedAnswerList[0] < score ||
                  selectedAnswerList.length === 0) && (
                  <img
                    src={process.env.PUBLIC_URL + "/img/starIcon.svg"}
                    alt="starIcon"
                  />
                )}

                <h3>{score}점</h3>
              </div>
            );
          })}
        </ScoreButtonContainer>
        <p>원하시는 별점을 선택해주세요</p>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 6.1rem;
  height: 100%;
  p {
    margin-top: 1.9rem;
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 500px) {
    p {
      margin-top: 1.2rem;
      font-size: 1.4rem;
    }
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  margin-top: 6rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0.3rem;
    cursor: pointer;
    img {
      width: 4.8rem;
    }
    h3 {
      margin-top: 1rem;
      margin-bottom: 0;
      padding: 0;
      ${fonts.Body1}
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }
  @media screen and (min-width: 500px) {
    margin-top: 2rem;
    height: 7rem;
    div {
      img {
        width: 5rem;
      }
      h3 {
        margin-top: 1rem;
        margin-bottom: 0;
        padding: 0;
        font-size: 1.5rem;
      }
    }
  }
`;

const Picked = styled.div`
  div {
    margin: 0;
    ${fonts.H1}
    color: ${({ theme }) => theme.mainHoverColor};
    font-size: 1.4rem;
    ${fadeInFromBottomAnimation}
  }
  img {
    margin: 0;
  }
`;

export default StarSurvey;
