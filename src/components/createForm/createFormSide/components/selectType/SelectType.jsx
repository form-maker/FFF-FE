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
    width: 3.2rem;
    height: 3.2rem;
  }
  h4 {
    padding-left: 1.1rem;
    margin: 0;

    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
`;

export default SelectType;
