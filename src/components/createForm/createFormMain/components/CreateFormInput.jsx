import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fillOutQuestionTitleAndSummery } from "../../../../redux/modules/createFormSlice";
import fonts from "../../../../styles/fonts";

const CreateFormInput = () => {
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm?.selectedFormType
  );
  const currentPageNum = useSelector(
    (state) => state.createForm?.currentPageNum
  );

  const selectedFormType = useSelector(
    (state) => state.createForm?.selectedFormType
  );

  const questionTitle = useSelector(
    (state) =>
      state.createForm.formList?.questionList?.length !== 0 &&
      questionType !== "COVER" &&
      selectedFormType !== "COVER" &&
      state.createForm?.formList?.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );

  const questionSummary = useSelector(
    (state) =>
      state.createForm.formList?.questionList.length !== 0 &&
      questionType !== "COVER" &&
      selectedFormType !== "COVER" &&
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
    questionType !== "COVER" &&
    // questionType !== "Group" &&
    questionType !== "NEW_FORM" &&
    questionType !== undefined && (
      <Container>
        <div>
          {/* <TitleNumber>{currentPageNum - 1}</TitleNumber> */}
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

const Container = styled.div`
  width: 100%;
  padding-top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  text-align: center;
  ${fonts.Body1}
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.9rem;
  width: 50rem;
  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  &::placeholder {
    color: ${({ theme }) => theme.color};
  }
`;

const SubTitleInput = styled.input`
  margin-top: 4.2rem;
  text-align: center;
  ${fonts.Body3}
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  width: 50rem;
  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  &::placeholder {
    ${fonts.Body3}
  }
`;

export default CreateFormInput;
