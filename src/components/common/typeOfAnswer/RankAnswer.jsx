import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { useSelector } from "react-redux";

const RankAnswer = () => {
  // const answerId = useRef(1);
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const answerList = useSelector(
    (state) =>
      state.createForm.formList.questionList[currentPageNum - 2]["answerList"]
  );

  let addAnswerId = answerList?.map((answer, index) => {
    return { id: String(index + 1), answer: answer };
  });

  const [characters, updateCharacters] = useState(addAnswerId);

  useEffect(() => {
    updateCharacters(addAnswerId);
  }, [answerList]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);

    const [reorderedItem] = characters.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <Container>
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
                        <p> {`${index + 1}. ${answer}`}</p>
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
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 26.5rem;
  height: 4.2rem;
  margin: 6px;
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

export default RankAnswer;
