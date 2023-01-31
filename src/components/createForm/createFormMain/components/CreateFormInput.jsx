import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

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
      state.createForm?.formList?.questionList?.length !== 0 &&
      questionType !== "COVER" &&
      selectedFormType !== "COVER" &&
      questionType !== "NEW_FORM" &&
      state.createForm?.formList?.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );
  const questionSummary = useSelector(
    (state) =>
      state.createForm.formList?.questionList.length !== 0 &&
      questionType !== "COVER" &&
      selectedFormType !== "COVER" &&
      questionType !== "NEW_FORM" &&
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
    questionType !== "NEW_FORM" &&
    questionType !== undefined && (
      <Container>
        <div>
          <TitleInput
            placeholder="질문을 작성해주세요"
            value={questionTitle || ""}
            name="questionTitle"
            onChange={InputHandler}
            maxLength={24}
          ></TitleInput>
          <p>24자 이내로 작성해주세요 ({questionTitle?.length}자)</p>
        </div>
        <br />
        <SubTitleInput
          placeholder="질문에 대한 상세 설명을 작성해주세요(선택사항)"
          value={questionSummary || ""}
          name="questionSummary"
          onChange={InputHandler}
          maxLength={50}
        ></SubTitleInput>
        <p>50자 이내로 작성해주세요 ({questionSummary?.length}자)</p>
      </Container>
    )
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 6.5rem;
  width: 100%;

  p {
    margin: 0.3rem 0 0 0;

    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;

    color: ${({ theme }) => theme.pointColor};
  }
`;

const TitleInput = styled.input`
  width: 50rem;

  ${fonts.Body1}
  font-weight: 700;
  font-size: 2rem;

  border: none;
  text-align: center;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  &::placeholder {
    color: ${({ theme }) => theme.gray8};
  }
`;

const SubTitleInput = styled.input`
  margin-top: 0.8rem;
  width: 50rem;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.9rem;

  text-align: center;
  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  &::placeholder {
    ${fonts.Body3}
    color:${({ theme }) => theme.gray8}
  }
`;

export default CreateFormInput;
