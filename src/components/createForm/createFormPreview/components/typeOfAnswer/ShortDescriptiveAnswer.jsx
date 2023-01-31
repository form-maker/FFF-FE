import React from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";

const ShortDescriptiveAnswer = () => {
  return (
    <Container>
      <input placeholder="한문장으로 작성해주세요" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  input {
    margin-bottom: 5rem;
    padding: 1.1rem;
    width: 27.3rem;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;

    text-align: center;
    border: none;
    border-bottom: 0.3rem solid ${({ theme }) => theme.mainColor};
    &::placeholder {
      ${fonts.Body1}
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
`;

export default ShortDescriptiveAnswer;
