import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import StatsHeaderScreen from "../components/stats/statsHeader/screen/StatsHeaderScreen";
import StatsCategory from "../components/stats/statsMainList/components/StatsCategory";
import StatsMainListScreen from "../components/stats/statsMainList/screen/StatsMainListScreen";
import Calender from "../components/stats/statsMainList/components/Calender";

const Stats = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const wrapperRef = useRef();

  useEffect(() => {
    const clickOutSide = (event) => {
      if (
        isToggleOn &&
        wrapperRef.current &&
        !wrapperRef.current?.contains(event.target)
      ) {
        setIsToggleOn(false);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, [isToggleOn]);

  return (
    <Container>
      <StatsHeaderScreen />
      <StatsMainContainer>
        <ToggleButton
          onClick={() => {
            setIsToggleOn((prev) => !prev);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/img/statsToggle.svg"}
            alt="statsToggle"
          ></img>
        </ToggleButton>
        {isToggleOn && (
          <ToggleMenu ref={wrapperRef}>
            <ToggleMenuContainer>
              <Calender setIsToggleOn={setIsToggleOn} />
              <StatusContainer>
                <StatsCategory />
              </StatusContainer>
            </ToggleMenuContainer>

            <ToggleCloseButton
              onClick={() => {
                setIsToggleOn((prev) => !prev);
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/statsToggleClose.svg"}
                alt="statsToggle"
              ></img>
            </ToggleCloseButton>
          </ToggleMenu>
        )}
        <StatsMainItemContainer>
          <StatsMainListScreen />
        </StatsMainItemContainer>
      </StatsMainContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StatsMainContainer = styled.div`
  background: ${({ theme }) => theme.backgroundColor2};
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 9.5rem;
  position: relative;
`;

const StatsMainItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  margin: 0;
  padding-top: 3rem;
`;

const ToggleButton = styled.div`
  width: 35.6rem;
  height: 3rem;
  border-radius: 0px 0px 10px 10px;
  background: ${({ theme }) => theme.gray7};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 2.7rem;
  }
  cursor: pointer;
`;

const ToggleMenuContainer = styled.div`
  display: flex;
  margin-top: 3.7rem;
`;

const ToggleCloseButton = styled.div`
  width: 35.6rem;
  height: 3rem;
  border-radius: 10px 10px 0px 0px;
  background: ${({ theme }) => theme.gray7};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 2.7rem;
  }
  cursor: pointer;
`;

const ToggleMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 50rem;
  z-index: 1;
  background: ${({ theme }) => theme.backgroundColor};
  border-bottom: ${({ theme }) => `1px solid ${theme.gray6}`};
`;

const StatusContainer = styled.div`
  height: 40rem;
  overflow: auto;
  margin-left: 3.7rem;
`;

export default Stats;
