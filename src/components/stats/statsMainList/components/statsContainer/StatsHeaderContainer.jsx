import React from "react";
import styled from "styled-components";

const StatsHeaderContainer = ({ children }) => {
  return <Header>{children}</Header>;
};
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 3rem 0 3rem;
`;

export default StatsHeaderContainer;
