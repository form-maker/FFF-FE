import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  fillOutQuestionTitleAndSummery,
  fillOutRequired,
} from "../../../../redux/modules/createFormSlice";
import fonts from "../../../../styles/fonts";
import ToggleButton from "../../../common/buttons/ToggleButton";

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
      state.createForm.formList?.questionList?.length !== 0 &&
      questionType !== "COVER" &&
      selectedFormType !== "COVER" &&
      questionType !== "NEW_FORM" &&
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionSummary"
      ]
  );
  const isRequired = useSelector(
    (state) =>
      state.createForm?.formList?.questionList?.length !== 0 &&
      questionType !== "COVER" &&
      state.createForm?.formList?.questionList[currentPageNum - 2]["isRequired"]
  );

  const test = useSelector((state) => state.createForm?.formList?.questionList);

  console.log(test);

  const InputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      fillOutQuestionTitleAndSummery({
        key: name,
        value,
      })
    );
  };

  const RequireHandler = () => {
    dispatch(fillOutRequired(!isRequired));
  };

  return (
    questionType !== "CONSENT" &&
    questionType !== "COVER" &&
    questionType !== "NEW_FORM" &&
    questionType !== undefined && (
      <Container>
        <ToggleContainer>
          <h5>필수 응답</h5>
          <ToggleButton isRequired={isRequired} onClick={RequireHandler} />
        </ToggleContainer>
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

  padding-top: 0.5rem;
  width: 100%;

  p {
    margin: 0.3rem 0 0 0;

    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;

    color: ${({ theme }) => theme.pointColor};
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50rem;
  h5 {
    ${fonts.Body2}
    font-size: 1.4rem;
    margin-right: 1rem;
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
