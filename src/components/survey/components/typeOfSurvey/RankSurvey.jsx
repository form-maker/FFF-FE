import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  changeAnswerList,
  __getSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../../components/TurnAPageButtons";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const RankSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  let addAnswerId = question.answerList?.map((answer, index) => {
    return {
      id: String(index + 1),
      answer: answer.answerValue,
      answerNum: answer.answerNum,
    };
  });
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const [characters, updateCharacters] = useState(addAnswerId);

  let answerNumList = [];
  for (let i = 1; i <= question.answerList?.length; i++) {
    answerNumList.push(i);
  }

  const goNextPageHandler = () => {
    currentPageNum !== questionIdList.length + 1 &&
      setTimeout(() => {
        dispatch(__getSurveyQuestion(questionIdList[currentPageNum - 1]));
      }, 400);
  };

  useEffect(() => {
    let answerList = characters?.map((character) => {
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

  return (
    <Container>
      <Title marginTop="0.4rem" />
      <CommentContainer>
        <p>드래그 앤 드롭으로 원하는 순위를 조정해주세요</p>
      </CommentContainer>
      <DragDropContainer>
        <AnswerNumberContainer>
          {answerNumList.map((answerNum) => (
            <div>{answerNum}</div>
          ))}
        </AnswerNumberContainer>
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
                        >
                          {`${answer}`}
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
      </DragDropContainer>
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

  width: 26.5rem;
  height: 100%;
  padding-top: 6.1rem;
  @media screen and (min-width: 500px) {
    justify-content: center;
    width: 40rem;
    padding: 0;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  p {
    margin: 0;
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
  @media screen and (min-width: 500px) {
    margin-top: 2rem;
    p {
      margin-top: 0;
      font-size: 1.8rem;
    }
  }
`;

const DragDropContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 500px) {
    margin-top: 2rem;
    justify-content: center;
  }
`;

const AnswerNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0 1rem 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 6px;
    padding: 1.2rem 2.2rem;
    width: 4.2rem;
    height: 4.2rem;

    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.8rem;

    background-color: ${({ theme }) => theme.subColor2};
    border-radius: 10px;
  }
`;

const DNDListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`;

const DNDList = styled.div`
  display: flex;
  align-items: center;

  margin: 0.6rem;
  padding: 1.2rem 2.2rem;
  width: 21rem;
  height: 4.2rem;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;

  background-color: ${({ theme }) => theme.subColor1};
  border-radius: 10px;
  p {
    margin: 0;
  }

  @media screen and (min-width: 500px) {
    font-size: 1.6rem;
    width: 37rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default RankSurvey;
