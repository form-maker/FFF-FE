import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";
import { deleteQuestion } from "../../../../redux/modules/createFormSlice";
import SelectTypeList from "./selectType/SelectTypeList";

const CreateFormCard = ({
  imgName,
  title,
  onClick,
  index,
  isCurrentPageNum,
  questionId,
  isCover,
  stats,
}) => {
  const dispatch = useDispatch();
  const wrapperRef = useRef();
  const [isSelectToggleShow, setIsSelectToggleShow] = useState(false);

  if (imgName === "SCORE") {
    imgName = "STAR";
  }
  if (imgName === "MULTIPLE_CHOICE") {
    imgName = "SINGLE_CHOICE";
  }
  if (imgName === "LONG_DESCRIPTIVE") {
    imgName = "SHORT_DESCRIPTIVE";
  }
  return (
    <Container
      onClick={onClick}
      background={isCurrentPageNum ? "pointColor2" : null}
      fontWeight={isCurrentPageNum ? "900" : null}
    >
      <div>{stats ? index + 1 : index + 2}</div>
      <img
        src={process.env.PUBLIC_URL + `/img/${imgName}.svg`}
        alt={imgName}
        onClick={() => {}}
      ></img>
      <h4>
        {title === ""
          ? isCover
            ? "설문 제목 입력"
            : "질문 제목 입력"
          : title.length > 10
          ? title.slice(0, 10) + "..."
          : title}
      </h4>
      {!isCover && !stats && (
        <img
          src={process.env.PUBLIC_URL + "/img/circleClose.svg"}
          alt="circleClose"
          onClick={() => {
            dispatch(deleteQuestion(questionId));
          }}
        />
      )}
      {isSelectToggleShow && (
        <ToggleContainer ref={wrapperRef}>
          <SelectTypeList
            setIsSelectToggleShow={setIsSelectToggleShow}
            isCreateForm={true}
          />
        </ToggleContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.7rem;
  height: 3.4rem;

  cursor: pointer;
  div {
    margin: 0;
    padding: 0;
    width: 2rem;

    ${fonts.Body1}
    font-weight: 400;
    font-weight: ${({ fontWeight }) => fontWeight || 700};
    font-size: 1.5rem;

    color: ${({ background, theme }) => theme[background] || theme.color};
  }
  img {
    width: 3.4rem;
    height: 3.4rem;
  }
  h4 {
    margin: 0;
    padding: 0 0 0 1.1rem;
    width: 7.5rem;
    ${fonts.Body1}
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    font-size: 1.3rem;
    line-height: 1.6rem;

    color: ${({ background, theme }) => theme[background] || theme.color};
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 4rem;
  z-index: 1;
`;

export default CreateFormCard;
