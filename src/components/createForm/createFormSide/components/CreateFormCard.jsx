import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";
import { deleteQuestion } from "../../../../redux/modules/createFormSlice";

const CreateFormCard = ({
  imgName,
  title,
  onClick,
  index,
  isCurrentPageNum,
  questionId,
  isCover,
}) => {
  const dispatch = useDispatch();
  if (imgName === "SCORE") {
    imgName = "STAR";
  }
  if (imgName === "MULTIPLE_CHOICE") {
    imgName = "SINGLE_CHOICE";
  }
  if (imgName === "LONG_DESCRIPTIVE") {
    imgName = "SHORT_DESCRIPTIVE";
  }
  if (imgName === undefined) {
    imgName = "NEW_FORM";
    title = "설문 타입을 선택해주세요";
  }
  return (
    <Container
      onClick={onClick}
      background={isCurrentPageNum ? "pointColor2" : null}
      fontWeight={isCurrentPageNum ? "900" : null}
    >
      <div>{index + 2}</div>
      <img
        src={process.env.PUBLIC_URL + `/img/${imgName}.svg`}
        alt={imgName}
      ></img>
      <h4>{title === "" ? "질문을 작성해주세요" : title}</h4>
      {!isCover && (
        <img
          src={process.env.PUBLIC_URL + "/img/circleClose.svg"}
          alt="circleClose"
          onClick={() => {
            dispatch(deleteQuestion(questionId));
          }}
        />
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

    ${fonts.Body1}
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    font-size: 1.3rem;
    line-height: 1.6rem;

    color: ${({ background, theme }) => theme[background] || theme.color};
  }
`;

export default CreateFormCard;
