import React from "react";
import styled from "styled-components";

import MyPageCardList from "../components/MyPageCardList";
import MyPageCategory from "../components/MyPageCategory";

const MyPageContentScreen = () => {
  return (
    <Container>
      <MyPageCategory />
      <MyPageCardList />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 9.1rem 3rem 0 3rem;
`;

export default MyPageContentScreen;
