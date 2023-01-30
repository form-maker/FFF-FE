import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { __deleteCard } from "../../../../redux/modules/myPageListSlice";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";
import useCopyClipBoard from "../hooks/useCopyClipBoard";

const MySurveySummeryCard = ({
  title,
  createdAt,
  participant,
  achievement,
  status,
  achievementRate,
  totalQuestion,
  surveyId,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCopy, onCopy] = useCopyClipBoard();

  const copyClipBoardHandler = (text) => {
    onCopy(text);
  };

  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
        <p>생성일: {createdAt}</p>
      </TitleContainer>

      <DetailContainer>
        <div>
          <h5>전체 참여자 수</h5>
          <h4>
            {participant}/ <span>{achievement}명</span>
          </h4>
        </div>
        <div>
          <h5>상태</h5>
          <h4>
            {status === "IN_PROCEED" && "진행중"}
            {status === "NOT_START" && "진행전"}
            {status === "DONE" && "완료"}
          </h4>
        </div>
        <div>
          <h5>첨여 달성도</h5>
          <h4>{achievementRate}%</h4>
        </div>
        <div>
          <h5>문항수</h5>
          <h4>{totalQuestion}</h4>
        </div>
      </DetailContainer>
      <ButtonContainer>
        <RoundButtonMedium
          onClick={() => {
            copyClipBoardHandler(`localhost:3000/survey?surveyId=${surveyId}`);
          }}
          buttonValue="링크공유"
          background="subColor1"
        ></RoundButtonMedium>
        <RoundButtonMedium
          onClick={() => {
            dispatch(__deleteCard(surveyId));
          }}
          buttonValue="삭제하기"
          background="subColor1"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="결과보기"
          background="subColor1"
          onClick={() => {
            navigate(`/stats/${surveyId}`);
          }}
        ></RoundButtonMedium>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2.4rem 3.7rem;
  border-radius: 2.1rem;

  background: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 3.5rem;
  div {
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  width: 15.3rem;
  margin: 0;
  h3 {
    margin: 0;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  p {
    margin: 0.7rem 0 0 0;

    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 56.9rem;
  div {
    text-align: center;
    h5 {
      margin: 0;

      ${fonts.Body5}
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
    h4 {
      margin: 0.7rem 0 0 0;

      ${fonts.Body1}
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.8rem;
      span {
        ${fonts.Body5}
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MySurveySummeryCard;
