import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";

const CreateFormPageNumber = () => {
  const questionLength = useSelector(
    (state) => state.createForm.formList?.questionList
  )?.length;
  const currentPageNum = useSelector(
    (state) => state.createForm?.currentPageNum
  );

  return (
    <Container>
      <p>
        {currentPageNum ? currentPageNum : 1}/
        {questionLength ? questionLength + 1 : 1}
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 3.1rem;

  ${fonts.Body3}
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export default CreateFormPageNumber;
