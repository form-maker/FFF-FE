import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { SERVER_URL_API } from "../../../../constants/env";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const StatsSubHeader = () => {
  const { surveyId } = useParams();
  const statsList = useSelector((state) => state.stats.stats);

  return (
    <Container>
      <SubHeaderContainer>
        <h5>{statsList.surveyTitle}</h5>
        <div>
          <RoundButtonMedium
            buttonValue="CSV 다운로드"
            background="subColor1"
            fontSize="1.5rem"
            margin="0 1rem 0 0 "
            height="3.4rem"
            borderRadius="9.9rem"
            onClick={() => {
              window.open(
                `${SERVER_URL_API}/survey/stats/download/csv?surveyId=${surveyId}`
              );
            }}
          />
          <RoundButtonMedium
            buttonValue="엑셀 다운로드"
            background="subColor1"
            fontSize="1.5rem"
            margin="0"
            height="3.4rem"
            borderRadius="9.9rem"
            onClick={() => {
              window.open(
                `${SERVER_URL_API}/survey/stats/download/xls?surveyId=${surveyId}`
              );
            }}
          />
        </div>
      </SubHeaderContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid #e1e1e1;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 3rem;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  h5 {
    ${fonts.Body1}
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
  div {
    display: flex;
  }
`;

export default StatsSubHeader;
