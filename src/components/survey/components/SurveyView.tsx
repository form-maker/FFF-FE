import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { batch } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";

import fonts from "../../../styles/fonts";
import RoundButtonLarge from "../../common/buttons/roundButtons/RoundButtonLarge";

import {
  goEnd,
  __getSurvey,
  __getSurveyQuestion,
  __postSurvey,
} from "../../../redux/modules/surveySlice";
import { SERVER_URL_API } from "../../../constants/env";

import CoverSurvey from "./typeOfSurvey/CoverSurvey";
import ScoreSurvey from "./typeOfSurvey/ScoreSurvey";
import StarSurvey from "./typeOfSurvey/StarSurvey";
import SingleChoiceSurvey from "./typeOfSurvey/SingleChoiceSurvey";
import MultipleChoiceSurvey from "./typeOfSurvey/MultipleChoiceSurvey";
import SlideSurvey from "./typeOfSurvey/SlideSurvey";
import RankSurvey from "./typeOfSurvey/RankSurvey";
import ShortDescriptiveSurvey from "./typeOfSurvey/ShortDescriptiveSurvey";
import LongDescriptiveSurvey from "./typeOfSurvey/LongDescriptiveSurvey";
import EndSurvey from "./typeOfSurvey/EndSurvey";
import TurnAPageButtons from "./TurnAPageButtons";
import Consent from "./typeOfSurvey/Consent";

const SurveyView = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const surveyId = searchParams.get("surveyId");

  const questionIdList = useAppSelector((state) => state.survey.questionIdList);
  const survey = useAppSelector((state) => state.survey.survey);
  const currentFormType = useAppSelector(
    (state) => state.survey.currentFormType
  );
  const currentPageNum = useAppSelector((state) => state.survey.currentPageNum);
  const answerList = useAppSelector((state) => state.survey.answer);

  const test = useAppSelector((state) => state.survey);

  console.log(test);

  useEffect(() => {
    dispatch(__getSurvey(surveyId));
  }, [dispatch, surveyId]);

  const [listening, setListening] = useState(false);
  const [countData, setData] = useState(0);

  let eventSource: any = undefined;

  useEffect(() => {
    if (!listening) {
      eventSource = new EventSource(
        `${SERVER_URL_API}/sse/connect/${surveyId}`
      );

      eventSource.onopen = () => {
        console.log("connection opened");
      };

      eventSource.onmessage = (event: any) => {
        const data = JSON.parse(event.data);
        data.msg === "data" &&
          batch(() => {
            console.log(data.total);
            setData(data.total);
          });
      };
      eventSource.onerror = (event: any) => {
        console.error(event.target.readyState);
        if (event.target.readyState === EventSource.CLOSED) {
          console.log(`eventSource closed: ${event.target.readyState}`);
        }
        eventSource.close();
      };
      setListening(true);
    }
    return () => {
      eventSource.close();
      console.log("event closed");
    };
  }, []);

  console.log(`countData :${countData}`);

  const endSurveyClickHandler = () => {
    let BlankAnswer = answerList?.filter(
      (answer) => answer.selectValue.length === 0 && answer.descriptive === ""
    );
    BlankAnswer.length !== 0
      ? Swal.fire({
          text: "체크하지 않은 문항이 있습니다!",
          icon: "warning",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        })
      : batch(() => {
          dispatch(__postSurvey({ surveyId, answerList }));
          dispatch(goEnd());
        });
  };

  return (
    <Container>
      <HomeContainer>
        <img
          src={process.env.PUBLIC_URL + "/img/home.svg"}
          alt="home"
          onClick={() => {
            navigate("/");
          }}
        ></img>
      </HomeContainer>
      <Header>
        {survey?.giftList?.length === 0 ? (
          <PointContext>
            🔥 현재 {countData}명이 함께 설문에 참여하고 있어요
          </PointContext>
        ) : (
          <PointContext>
            🔥 현재 {countData}명이 {survey?.giftList?.[0]?.giftName}
            을(를) 노리고 있어요
          </PointContext>
        )}
      </Header>
      <Main>
        {currentFormType === "COVER" && <CoverSurvey />}
        {currentFormType === "CONSENT" && <Consent />}
        {currentFormType === "SCORE" && <ScoreSurvey />}
        {currentFormType === "STAR" && <StarSurvey />}
        {currentFormType === "SINGLE_CHOICE" && <SingleChoiceSurvey />}
        {currentFormType === "MULTIPLE_CHOICE" && <MultipleChoiceSurvey />}
        {currentFormType === "SLIDE" && <SlideSurvey />}
        {currentFormType === "RANK" && <RankSurvey />}
        {currentFormType === "SHORT_DESCRIPTIVE" && <ShortDescriptiveSurvey />}
        {currentFormType === "LONG_DESCRIPTIVE" && <LongDescriptiveSurvey />}
        {currentFormType === "SURVEY_END" && <EndSurvey />}
      </Main>
      <EndButtonContainer>
        {currentFormType !== "COVER" &&
          currentFormType !== "SURVEY_END" &&
          (currentPageNum === survey?.questionIdList?.length! + 1 ? (
            <div>
              <RoundButtonLarge
                buttonValue="설문 완료"
                onClick={endSurveyClickHandler}
                backgroundColor="subColor1"
                width="28.3rem"
              ></RoundButtonLarge>
              <TurnAPageButtons />
            </div>
          ) : (
            <div>
              <RoundButtonLarge
                buttonValue="Picked!"
                onClick={() => {
                  dispatch(
                    __getSurveyQuestion(questionIdList[currentPageNum - 1])
                  );
                }}
                backgroundColor="subColor1"
                width="28.3rem"
              ></RoundButtonLarge>
              <TurnAPageButtons />
            </div>
          ))}
      </EndButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  height: 100%;
  ${fonts.Body1}

  overflow-y: auto;

  @media screen and (min-width: 500px) {
    width: 60%;
    height: 95%;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 2rem;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  img {
    width: 2.5rem;
  }
`;

const Header = styled.div`
  margin-top: 1rem;

  @media screen and (min-width: 500px) {
    margin-top: 0.5rem;
  }
`;

const PointContext = styled.div`
  padding: 0.7rem;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;

  text-align: center;
  background: ${({ theme }) => theme.gray3};
  border-radius: 9.9rem;

  @media screen and (min-width: 500px) {
    padding: 0.5rem 2rem;

    font-size: 1.4rem;
    line-height: 1.8rem;

    border-radius: 2rem;
  }
`;

const Main = styled.div`
  flex: 1;
`;

const EndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`;

export default SurveyView;
