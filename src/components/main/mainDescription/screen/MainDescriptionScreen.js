import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonLarge from "../../../common/buttons/roundButtons/RoundButtonLarge";
import { useNavigate } from "react-router-dom";

const MainDescriptionScreen = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box>
        <MainTitleContainer>
          <h1>몽글몽글 설문조사</h1>
          <p>설문에 참여하고 이벤트에 응모해보세요</p>
          <div>
            <RoundButtonLarge
              buttonValue="설문 참여하기"
              margin="0 0.5rem 0 0"
            />
            <RoundButtonLarge
              buttonValue="설문 제작하기"
              onClick={navigate("/createForm")}
            />
          </div>
        </MainTitleContainer>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  width: 95%;
  height: 18rem;
  background: ${({ theme }) => theme.mainColor};
  border-radius: 2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const MainTitleContainer = styled.div`
  position: relative;
  margin-left: 40rem;
  margin-top: 3rem;
  h1 {
    ${fonts.H1}
    margin: 0;
  }
  p {
    margin: 0.2rem;
    font-size: 1.5rem;
  }
  div {
    margin: 2.2rem 0;
  }
`;

export default MainDescriptionScreen;
