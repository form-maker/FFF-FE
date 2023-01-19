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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 9.1rem 3rem 0 3rem;
  height: 100%;
  flex: 1;
`;

export default MyPageContentScreen;
