import React from "react";
import styled from "styled-components";
import SelectType from "./SelectType";
import { useDispatch, useSelector } from "react-redux";
import { selectedFormType } from "../../../../../redux/modules/createFormSlice";

const SelectTypeList = ({ setIsSelectToggleShow }) => {
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );

  const selectTypeHandler = (type) => {
    questionType === "COVER"
      ? alert("문항을 추가해주세요")
      : dispatch(selectedFormType(type));
  };

  return (
    <Container>
      <SelectType
        imgName="STAR"
        typeName="별점형"
        onClick={() => {
          selectTypeHandler("SCORE");
          setIsSelectToggleShow((prev) => !prev);
        }}
      />
      <SelectType
        imgName="SLIDE"
        typeName="만족도"
        onClick={() => {
          selectTypeHandler("SLIDE");
          setIsSelectToggleShow((prev) => !prev);
        }}
      />
      <SelectType
        imgName="SINGLE_CHOICE"
        typeName="객관식"
        onClick={() => {
          selectTypeHandler("SINGLE_CHOICE");
          setIsSelectToggleShow((prev) => !prev);
        }}
      />
      <SelectType
        imgName="RANK"
        typeName="순위"
        onClick={() => {
          selectTypeHandler("RANK");
          setIsSelectToggleShow((prev) => !prev);
        }}
      />
      <SelectType
        imgName="SHORT_DESCRIPTIVE"
        typeName="주관식"
        questionType="주관식 페이지"
        onClick={() => {
          selectTypeHandler("SHORT_DESCRIPTIVE");
          setIsSelectToggleShow((prev) => !prev);
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 16.9rem;
  border-radius: 1rem;
  padding: 2.1rem 2.6rem;
  background: ${({ theme }) => theme.backgroundColor2};
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
`;

export default SelectTypeList;
