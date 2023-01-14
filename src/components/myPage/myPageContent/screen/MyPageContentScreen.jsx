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
  padding-top: 11.4rem;
  padding-left: 3rem;
`;

export default MyPageContentScreen;
