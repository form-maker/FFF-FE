import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch, batch } from "react-redux";
import styled from "styled-components";
// import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";

import {
  goEnd,
  __getSurvey,
  __postSurvey,
} from "../../../redux/modules/surveySlice";
import fonts from "../../../styles/fonts";
import RoundButtonLarge from "../../common/buttons/roundButtons/RoundButtonLarge";

import CoverSurvey from "./typeOfSurvey/CoverSurvey";
import ScoreSurvey from "./typeOfSurvey/ScoreSurvey";
import StarSurvey from "./typeOfSurvey/StarSurvey";
import SingleChoiceSurvey from "./typeOfSurvey/SingleChoiceSurvey";
import MultipleChoiceSurvey from "./typeOfSurvey/MultipleChoiceSurvey";
import SlideSurvey from "./typeOfSurvey/SlideSurvey";
import RankSurvey from "./typeOfSurvey/RankSurvey";
import ShortDescriptiveSurvey from "./typeOfSurvey/ShortDescriptiveSurvey";
import LongDescriptiveSurvey from "./typeOfSurvey/LongDescriptiveSurvey";
import { SERVER_URL_API } from "../../../constants/env";
import { useState } from "react";
import SSE from "./SSE";
import uuid from "react-uuid";
import { instanceApi } from "../../../core/api";
import EndSurvey from "./typeOfSurvey/EndSurvey";

const SurveyView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const surveyId = searchParams.get("surveyId");

  const survey = useSelector((state) => state.survey.survey);
  const currentFormType = useSelector((state) => state.survey.currentFormType);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const answerList = useSelector((state) => state.survey.answer);
  const error = useSelector((state) => state.survey.error);

  useEffect(() => {
    dispatch(__getSurvey(surveyId));
    error && navigate("/login");
  }, [dispatch, surveyId]);

  // let id;
  // useEffect(() => {
  //   id = uuid();

  //   const connect = async () => {
  //     try {
  //       const { data } = await instanceApi.get(
  //         `/sse/join/${surveyId}?sessionId=${id}`
  //       );
  //       if (data.msg === "연결 성공") {
  //         console.log("success");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // const sseFetch = async() => {
  //   if (!listening) {
  //     eventSource = new EventSource(
  //       `${SERVER_URL_API}/sse/join/${surveyId}?sessionId=${id}`
  //     );
  //     eventSource.onmessage = async (event) => {
  //       const data = await JSON.parse(event.data);
  //       data.msg === "data" &&
  //         batch(() => {
  //           console.log(data.total);
  //           setData(data.total);
  //         });
  //     };
  //     eventSource.onerror = async(error) => {
  //       console.error(error);
  //       eventSource.close();
  //     };
  //     setListening(true);
  //   }
  //   return () => {
  //     eventSource.close();
  //     console.log("event closed");
  //   };
  // };
  // sseFetch();
  // }, []);

  // 유튜브;
  // useEffect(() => {
  //   const sseData = new EventSource(`${SERVER_URL_API}/sse/join/${surveyId}`);

  //   // sseData.addEventListener((event) => {
  //   //   const data = JSON.parse(event.data);
  //   //   console.log(data);
  //   //   // const { data: receivedCount } = e;
  //   //   // console.log(receivedCount);
  //   //   // setData(receivedCount);
  //   // });

  //   sseData.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log(data);
  //   };

  //   sseData.onerror = (event) => {
  //     sseData.close();
  //   };

  //   return () => {
  //     sseData.close();
  //   };
  // });

  // const [listening, setListening] = useState(false);
  // const [countData, setData] = useState(0);

  // let eventSource = undefined;

  // 기본
  // useEffect(() => {
  //   if (!listening) {
  //     eventSource = new EventSource(
  //       `${SERVER_URL_API}/sse/join/${surveyId}?sessionId=${id}`
  //     );
  //     eventSource.onmessage = (event) => {
  //       const data = JSON.parse(event.data);
  //       data.msg === "data" &&
  //         batch(() => {
  //           console.log(data.total);
  //           setData(data.total);
  //         });
  //     };
  //     eventSource.onerror = (error) => {
  //       console.error(error);
  //       eventSource.close();
  //     };
  //     setListening(true);
  //   }
  //   return () => {
  //     eventSource.close();
  //     console.log("event closed");
  //   };
  // }, [id]);

  const endSurveyClickHandler = () => {
    let BlankAnswer = answerList?.filter(
      (answer) => answer.selectValue.length === 0 && answer.descriptive === ""
    );
    BlankAnswer.length !== 0
      ? alert("체크하지 않은 문항이 있습니다!")
      : batch(() => {
          dispatch(__postSurvey({ surveyId, answerList }));
          dispatch(goEnd());
        });
  };

  return (
    <Container>
      <Header>
        <PointContext>🔥 현재 1명이 설문을 참여 중입니다.</PointContext>
      </Header>

      {currentFormType === "COVER" && <CoverSurvey />}
      {currentFormType === "SCORE" && <ScoreSurvey />}
      {currentFormType === "STAR" && <StarSurvey />}
      {currentFormType === "SINGLE_CHOICE" && <SingleChoiceSurvey />}
      {currentFormType === "MULTIPLE_CHOICE" && <MultipleChoiceSurvey />}
      {currentFormType === "SLIDE" && <SlideSurvey />}
      {currentFormType === "RANK" && <RankSurvey />}
      {currentFormType === "SHORT_DESCRIPTIVE" && <ShortDescriptiveSurvey />}
      {currentFormType === "LONG_DESCRIPTIVE" && <LongDescriptiveSurvey />}
      {currentFormType === "SURVEY_END" && <EndSurvey />}
      {currentPageNum === survey?.questionIdList?.length + 1 && (
        <EndButtonContainer>
          <RoundButtonLarge
            buttonValue="설문 완료"
            onClick={endSurveyClickHandler}
            background="subColor1"
            width="28.3rem"
          ></RoundButtonLarge>
        </EndButtonContainer>
      )}
    </Container>
  );
};

const Header = styled.div`
  margin-top: 4.2rem;
`;

const PointContext = styled.div`
  width: 22.7rem;
  padding: 0.7rem;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;

  text-align: center;
  background: ${({ theme }) => theme.gray3};
  border-radius: 9.9rem;

  @media screen and (min-width: 500px) {
    width: 35rem;
    padding: 1rem;

    font-size: 1.6rem;
    line-height: 1.8rem;

    border-radius: 2rem;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  @media screen and (min-width: 500px) {
    width: 60%;
    height: 80%;

    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 4.4rem;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  }
`;

const EndButtonContainer = styled.div`
  position: absolute;
  bottom: 10rem;
  @media screen and (min-width: 500px) {
    margin-bottom: 1.5rem;
  }
`;

export default SurveyView;
