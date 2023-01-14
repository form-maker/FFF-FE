import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonSmall from "../../../common/buttons/roundButtons/RoundButtonSmall";

const MyPageCategory = () => {
  return (
    <Container>
      <MainCategoryContainer>
        <div>현재 진행중인 폼</div>
        <div>진행 완료된 폼</div>
      </MainCategoryContainer>
      <SubCategoryContainer>
        <RoundButtonSmall buttonValue="최신순" margin="0 0.5rem 0 0" />
        <RoundButtonSmall
          buttonValue="마감 임박순"
          margin="0 0.5rem 0 0.5rem"
        />
        <RoundButtonSmall buttonValue="달성순" margin="0 0 0 0.5rem" />
      </SubCategoryContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const MainCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.3rem solid white;
  div {
    ${fonts.Body1}
    &:hover {
      border-bottom: 0.3rem solid ${({ theme }) => theme.mainColor};
    }
  }
`;

const SubCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default MyPageCategory;
