import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
  getCover,
} from "../../../redux/modules/surveySlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { changeAnswerList } from "../../../redux/modules/surveySlice";

const RankSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );
  const answer = useSelector((state) => state.survey.answer);

  useEffect(() => {
    console.log(selectedAnswerList);
    console.log(answer);
  }, [selectedAnswerList, answer]);

  // 드래그 앤 드롭 제작
  // 배경 색
  const backgroundColorList = [
    "rgb(254, 244, 148, 0.777)",
    "rgba(238, 184, 209, 0.777)",
    "rgb(185, 210, 234, 0.777)",
    "rgb(195, 230, 220, 0.777)",
  ];
  // 아이디 그룹 묶기
  let addAnswerId = question.answerList.map((answer, index) => {
    return {
      id: String(index + 1),
      answer: answer.answerValue,
      answerNum: answer.answerNum,
    };
  });
  const [characters, updateCharacters] = useState(addAnswerId);

  useEffect(() => {
    let answerList = characters.map((character) => {
      return character.answerNum;
    });
    dispatch(changeAnswerList(answerList));
  }, [dispatch, characters]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  const nextPageClickHandler = () => {
    currentPageNum === questionIdList.length + 1
      ? alert("마지막 항목입니다")
      : dispatch(__getSurveyQuestion(questionIdList[currentPageNum - 1]));
  };

  const goBackPageClickHandler = () => {
    currentPageNum === 2
      ? dispatch(getCover())
      : dispatch(__getBeforeSurveyQuestion(questionIdList[currentPageNum - 3]));
  };
  return (
    <Container>
      <h2>{question.questionTitle}</h2>
      <p>{question.questionSummary}</p>
      <MainContainer>
        <p>드래그 앤 드롭으로 원하는 순위를 조정해주세요.</p>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <DNDListContainer
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters?.map(({ id, answer }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <DNDList
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          // color={backgroundColorList[(id - 1) % 4]}
                        >
                          {answer}
                        </DNDList>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </DNDListContainer>
            )}
          </Droppable>
        </DragDropContext>
      </MainContainer>
      <BottomContainer>
        <button onClick={goBackPageClickHandler}>〈</button>
        <div>
          {currentPageNum}/{questionIdList.length + 1}
        </div>
        <button onClick={nextPageClickHandler}>〉</button>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h2 {
    margin: 5rem 0 0 0;
    ${fonts.H2}
  }
  p:nth-of-type(1) {
    ${fonts.Body2}
  }
  p:nth-of-type(2) {
    margin: 3rem 0 0 0;
    ${fonts.Body2}
  }
`;
const MainContainer = styled.div`
  margin-top: 4rem;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border: none;
    background: none;
    width: 6.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1.3rem 1.6rem;
    color: ${({ theme }) => theme.mainColor};
    ${fonts.H1}
    cursor: pointer;
  }
`;

const DNDListContainer = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DNDList = styled.div`
  display: flex;
  align-items: center;
  color: rgb(67, 67, 67);
  ${fonts.Body2}
  width:  26.5rem;
  height: 4.2rem;
  margin: 6px;
  padding: 1.2rem 2.2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainColor};
  p {
    margin: 0;
  }
`;

export default RankSurvey;
