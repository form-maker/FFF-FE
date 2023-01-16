import React from "react";
import styled from "styled-components";
import Calender from "../components/Calender";

const StatusSideBarScreen = () => {
  return (
    <Container>
      <Calender />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-left: 3rem;
`;

export default StatusSideBarScreen;
