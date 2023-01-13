import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { useSelector } from "react-redux";

const backgroundColorList = [
  "rgb(254, 244, 148, 0.777)",
  "rgba(238, 184, 209, 0.777)",
  "rgb(185, 210, 234, 0.777)",
  "rgb(195, 230, 220, 0.777)",
];

const RankAnswer = () => {
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

  console.log(addAnswerId);

  const [characters, updateCharacters] = useState(addAnswerId);
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
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
                        color={backgroundColorList[(id - 1) % 4]}
                      >
                        <p>{answer}</p>
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
      <CommentContainer>
        <p>최대 3개 문항 선택 가능합니다</p>
      </CommentContainer>
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
  color: rgb(67, 67, 67);
  ${fonts.Body2}
  width:  80%;
  margin: 6px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 5rem;
`;

export default RankAnswer;
