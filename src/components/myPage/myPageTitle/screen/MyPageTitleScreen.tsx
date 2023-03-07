import React from "react";
import styled from "styled-components";

import MyPageTitle from "../components/MyPageTitle";

const MyPageTitleScreen = () => {
  return (
    <Container>
      <MyPageTitle />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 8.9rem;
  padding-left: 3rem;
`;

export default MyPageTitleScreen;
