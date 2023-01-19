import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const StatsSubHeader = () => {
  const statsList = useSelector((state) => state.stats.stats);

  console.log(statsList);

  return (
    <Container>
      <SubHeaderContainer>
        <h5>{statsList.surveyTitle}</h5>
        <RoundButtonMedium
          buttonValue="파일 다운로드"
          background="subColor1"
          fontSize="1.5rem"
          margin="0"
          height="3.4rem"
          borderRadius="9.9rem"
        />
      </SubHeaderContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: center;
  height: 5rem;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 3rem;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  h5 {
    ${fonts.Body1}
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
`;

export default StatsSubHeader;
