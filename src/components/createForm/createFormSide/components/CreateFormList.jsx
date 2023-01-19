import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonMediumWide from "../../../common/buttons/roundButtons/RoundButtonMediumWide";
import CreateFormCard from "./CreateFormCard";
import { goClickPage } from "../../../../redux/modules/createFormSlice";

const CreateFormList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );

  const questionList = useSelector(
    (state) => state.createForm.formList.questionList
  );
  console.log(questionList);

  const goClickPageHandler = (questionId) => {
    let questionPage =
      questionList.findIndex(
        (question) => question?.questionId === questionId
      ) + 2;
    dispatch(goClickPage(questionPage));
  };

  return (
    <Container>
      <MainContainer>
        <Title>전체 페이지</Title>
        <SurveyListContainer>
          {questionList?.map((question, index) => (
            <CreateFormCard
              key={index}
              imgName={question.questionType}
              index={index}
              title={question.questionTitle}
              onClick={() => {
                goClickPageHandler(question.questionId);
              }}
            />
          ))}
        </SurveyListContainer>
      </MainContainer>
      <BottomContainer>
        <RoundButtonMediumWide
          buttonValue="그만두기"
          background="gray1"
          width="16.4rem"
          hoverBackground="gray2"
          onClick={() => {
            navigate("/");
          }}
        />
        <RoundButtonMediumWide
          buttonValue="임시저장"
          background="subColor1"
          width="16.4rem"
        />
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 100%;

  border: 1px solid #d9d9d9;
  border-radius: 0px 5px 5px 0px;
  background: ${({ theme }) => theme.sideColor2};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.8rem;
`;

const MainContainer = styled.div`
  flex: 1;
  width: 17.6rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${fonts.Body1}
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;

  width: 16.4rem;
  height: 2.93rem;
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const SurveyListContainer = styled.div`
  margin-top: 3.7rem;
  width: 100%;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CreateFormList;
