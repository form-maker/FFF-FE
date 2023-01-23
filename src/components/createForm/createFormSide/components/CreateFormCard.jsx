import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const CreateFormCard = ({
  imgName,
  title,
  onClick,
  index,
  isCurrentPageNum,
}) => {
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 3.4rem;
  align-items: center;
  margin-bottom: 1.7rem;
  cursor: pointer;
  div {
    ${fonts.Body1}
    font-weight: 400;
    font-weight: ${({ fontWeight }) => fontWeight || 700};
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    width: 2rem;
    color: ${({ background, theme }) => theme[background] || theme.color};
  }
  img {
    width: 3.4rem;
    height: 3.4rem;
  }
  h4 {
    ${fonts.Body1}
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    font-size: 1.3rem;
    line-height: 1.6rem;
    margin: 0;
    padding: 0;
    padding-left: 1.1rem;
    color: ${({ background, theme }) => theme[background] || theme.color};
  }
`;

export default CreateFormCard;
