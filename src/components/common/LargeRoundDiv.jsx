import React from "react";
import styled from "styled-components";
import fonts from "../../styles/fonts";

const LargeRoundDiv = ({ divText }) => {
  return <Container>{divText}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.6rem;
  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 17px;
  background: ${({ theme }) => theme.gray6};
  border-radius: 2.4rem;
  padding: 0 2rem;
`;

export default LargeRoundDiv;
