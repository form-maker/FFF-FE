import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
  getCover,
} from "../../../../redux/modules/surveySlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { changeAnswerList } from "../../../../redux/modules/surveySlice";
import TurnAPageButtons from "../../components/TurnAPageButtons";

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

  let answerNumList = [];
  for (let i = 1; i <= question.answerList?.length; i++) {
    answerNumList.push(i);
  }
  console.log(answerNumList);

  // 드래그 앤 드롭 제작
  // 아이디 그룹 묶기
  let addAnswerId = question.answerList?.map((answer, index) => {
    return {
      id: String(index + 1),
      answer: answer.answerValue,
      answerNum: answer.answerNum,
    };
  });
  const [characters, updateCharacters] = useState(addAnswerId);

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
      <TitleContainer>
        <h1>{question.questionTitle}</h1>
        <h5>{question.questionSummary}</h5>
      </TitleContainer>
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

      <ArrowButtonContainer>
        <TurnAPageButtons
          currentPageNum={currentPageNum}
          questionLength={questionIdList.length + 1}
          goBackPageClickHandler={goBackPageClickHandler}
          nextPageClickHandler={nextPageClickHandler}
        />
      </ArrowButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 26.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 6.1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    ${fonts.Body1}
    margin: 0;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  h5 {
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-top: 4.6rem;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  p {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0;
  }
`;

const DragDropContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
    width: 4.2rem;
    height: 4.2rem;
    margin: 6px;
    padding: 1.2rem 2.2rem;
    border-radius: 10px;

    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.8rem;

    background-color: ${({ theme }) => theme.subColor2};
  }
`;

const DNDListContainer = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DNDList = styled.div`
  display: flex;
  align-items: center;
  width: 21rem;
  height: 4.2rem;
  margin: 0.6rem;
  padding: 1.2rem 2.2rem;
  border-radius: 10px;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8rem;

  background-color: ${({ theme }) => theme.subColor1};
  p {
    margin: 0;
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
`;

export default RankSurvey;
