import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fillOutQuestionTitleAndSummery } from "../../../../redux/modules/createFormSlice";

const CreateFormInput = () => {
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const questionTitle = useSelector(
    (state) =>
      state.createForm.formList.questionList.length !== 0 &&
      questionType !== "Cover" &&
      state.createForm.formList.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );

  const questionSummary = useSelector(
    (state) =>
      state.createForm.formList?.questionList.length !== 0 &&
      questionType !== "Cover" &&
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionSummary"
      ]
  );

  const InputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      fillOutQuestionTitleAndSummery({
        key: name,
        value,
      })
    );
  };

  return (
    questionType !== "Cover" &&
    questionType !== "Group" &&
    questionType !== "NewForm" &&
    questionType !== undefined && (
      <Container>
        <div>
          <TitleNumber>{currentPageNum - 1}</TitleNumber>
          <TitleInput
            placeholder="질문을 작성해주세요"
            value={questionTitle || ""}
            name="questionTitle"
            onChange={InputHandler}
          ></TitleInput>
        </div>
        <br />
        <SubTitleInput
          placeholder="질문에 대한 상세 설명을 작성해주세요(선택사항)"
          value={questionSummary || ""}
          name="questionSummary"
          onChange={InputHandler}
        ></SubTitleInput>
      </Container>
    )
  );
};

const Container = styled.div``;

const TitleNumber = styled.span`
  font-size: 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  width: 50rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
`;

const SubTitleInput = styled.input`
  font-size: 1.4rem;
  border: none;
  width: 51.5rem;
  margin-top: 1.5rem;
  margin-left: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
`;

export default CreateFormInput;
