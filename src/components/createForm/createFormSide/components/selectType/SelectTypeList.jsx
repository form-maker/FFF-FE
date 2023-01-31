import React, { useRef } from "react";
import styled from "styled-components";
import SelectType from "./SelectType";
import { useDispatch, useSelector } from "react-redux";
import {
  addForm,
  selectedFormType,
  selectNewForm,
} from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";
import { batch } from "react-redux";
import uuid from "react-uuid";

const SelectTypeList = ({ setIsSelectToggleShow, isCreateForm }) => {
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );

  const selectNewFormHandler = (fillType) => {
    batch(() => {
      dispatch(selectNewForm(fillType));
    });
  };

  const selectTypeHandler = (type) => {
    batch(() => {
      dispatch(selectedFormType(type));
    });
  };

  return (
    <Container>
      <Title>설문 타입을 선택해 주세요</Title>
      <div>
        <SelectType
          imgName="CONSENT"
          typeName="정보동의"
          questionType="정보동의"
          onClick={() => {
            isCreateForm
              ? selectNewFormHandler({
                  questionId: uuid(),
                  questionType: "CONSENT",
                  questionTitle: "정보 이용 동의서",
                  questionSummary: "",
                })
              : selectTypeHandler("CONSENT");
            setIsSelectToggleShow((prev) => !prev);
          }}
        />
        <SelectType
          imgName="STAR"
          typeName="별점형"
          onClick={() => {
            isCreateForm
              ? selectNewFormHandler({
                  questionId: uuid(),
                  questionType: "SCORE",
                  questionTitle: "",
                  questionSummary: "",
                  answerList: [],
                })
              : selectTypeHandler("SCORE");
            setIsSelectToggleShow((prev) => !prev);
          }}
        />
        <SelectType
          imgName="SLIDE"
          typeName="만족도"
          onClick={() => {
            isCreateForm
              ? selectNewFormHandler({
                  questionId: uuid(),
                  questionType: "SLIDE",
                  questionTitle: "",
                  questionSummary: "",
                  answerList: [],
                })
              : selectTypeHandler("SLIDE");
            setIsSelectToggleShow((prev) => !prev);
          }}
        />
        <SelectType
          imgName="SINGLE_CHOICE"
          typeName="객관식"
          onClick={() => {
            isCreateForm
              ? selectNewFormHandler({
                  questionId: uuid(),
                  questionType: "SINGLE_CHOICE",
                  questionTitle: "",
                  questionSummary: "",
                  answerList: [],
                })
              : selectTypeHandler("SINGLE_CHOICE");
            setIsSelectToggleShow((prev) => !prev);
          }}
        />
        <SelectType
          imgName="RANK"
          typeName="순위"
          onClick={() => {
            isCreateForm
              ? selectNewFormHandler({
                  questionId: uuid(),
                  questionType: "RANK",
                  questionTitle: "",
                  questionSummary: "",
                  answerList: [],
                })
              : selectTypeHandler("RANK");
            setIsSelectToggleShow((prev) => !prev);
          }}
        />
        <SelectType
          imgName="SHORT_DESCRIPTIVE"
          typeName="주관식"
          questionType="주관식 페이지"
          onClick={() => {
            isCreateForm
              ? selectNewFormHandler({
                  questionId: uuid(),
                  questionType: "SHORT_DESCRIPTIVE",
                  questionTitle: "",
                  questionSummary: "",
                  answerList: [],
                })
              : selectTypeHandler("SHORT_DESCRIPTIVE");
            setIsSelectToggleShow((prev) => !prev);
          }}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 18rem;
  padding: 2.2rem 2rem;
  background: ${({ theme }) => theme.backgroundColor2};
  border-radius: 1rem;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${fonts.Body1}
  font-weight: 600;
  font-size: 1.2rem;

  margin-bottom: 2rem;
  width: 100%;
  height: 2.93rem;

  background: ${({ theme }) => theme.backgroundColor};
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

export default SelectTypeList;
