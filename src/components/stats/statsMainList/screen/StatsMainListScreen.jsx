import React from "react";
import styled from "styled-components";
import StatsList from "../components/StatsList";

const StatsMainListScreen = () => {
  return (
    <Container>
      <StatsList />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default StatsMainListScreen;
