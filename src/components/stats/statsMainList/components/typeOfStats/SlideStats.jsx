import React from "react";
import styled from "styled-components";
import ApexCharts from "react-apexcharts";

import Title from "../Title";
import StatsHeaderContainer from "../statsContainer/StatsHeaderContainer";

const SlideStats = ({ stats }) => {
  const volume = stats.volume;
  let answerList = stats.satisfactionList?.map((answer, index) => {
    return { name: index - volume, data: [answer] };
  });

  let answerNameList = [];
  for (let i = 0; i < volume * 2 + 1; i++) {
    answerNameList.push(i - volume);
  }

  let options = {
    series: answerList,

    options: {
      chart: {
        type: "bar",
        height: 400,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 6,
          barHeight: "60%",
        },
      },
      colors: [
        "#B0D1FF",
        "#BBE0FA",
        "#CEDFFF",
        "#F5F5F5",
        "#F6EAFD",
        "#7AB0FE",
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        style: {
          fontSize: "10px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: answerNameList,
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      legend: {
        show: true,
        offsetY: 8,
      },
      grid: { show: false },
    },
  };

  return (
    <Container>
      <StatsHeaderContainer>
        <Title
          questionType={stats.questionType}
          questionNum={stats.questionNum}
          questionTitle={stats.questionTitle}
          questionSummary={stats.questionSummary}
        />
      </StatsHeaderContainer>
      <ChartContainer>
        <ApexCharts
          options={options.options}
          series={options.series}
          type="bar"
          height={100}
          width={540}
        />
      </ChartContainer>
      <LabelContainer>
        <div>{stats.leftLabel}</div>
        <div>{stats.rightLabel}</div>
      </LabelContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 47.2rem;
  height: 41.6em;

  background: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const ChartContainer = styled.div`
  margin-top: 8rem;
`;

const LabelContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;

  padding: 0 3rem 0 3rem;
  width: 100%;
  top: 25.5rem;
`;

export default SlideStats;
