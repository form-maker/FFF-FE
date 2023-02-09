import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import Calender from "../../statsMainList/components/Calender";
import StatsCategory from "../../statsMainList/components/StatsCategory";

const StatsSortToggleScreen = () => {
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
    <>
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
    </>
  );
};

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
  height: 34rem;
  z-index: 1;
  background: ${({ theme }) => theme.backgroundColor};
  border-bottom: ${({ theme }) => `1px solid ${theme.gray6}`};
`;

const StatusContainer = styled.div`
  height: 23rem;
  overflow: auto;
  margin-left: 3.7rem;
`;

export default StatsSortToggleScreen;
