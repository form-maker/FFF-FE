import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

const SelectType = ({ imgName, typeName, onClick }) => {
  return (
    <Container onClick={onClick}>
      <img
        src={process.env.PUBLIC_URL + `/img/${imgName}.svg`}
        alt={imgName}
      ></img>
      <h4>{typeName} 설문지</h4>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 1.7rem;
  }
  img {
    width: 3.4rem;
    height: 3.4rem;
  }
  h4 {
    ${fonts.Body1}
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.6rem;
    padding-left: 1.1rem;
    margin: 0;
  }
`;

export default SelectType;
