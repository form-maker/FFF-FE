import React from "react";
import styled from "styled-components";
import NoOutlineButton from "../components/common/buttons/NoOutlineButton";

const Header = () => {
  return (
    <Container>
      <div>
        <NoOutlineButton buttonValue="폼폼폼" fontSize="1.2rem" />
        <div>
          <NoOutlineButton buttonValue="진행중인 폼" fontSize="0.8rem" />
          <NoOutlineButton buttonValue="제작하기" fontSize="0.8rem" />
        </div>
        <div>
          <NoOutlineButton buttonValue="로그인" fontSize="0.9rem" />
          <span>|</span>
          <NoOutlineButton buttonValue="회원가입" fontSize="0.9rem" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
  }
`;

export default Header;
