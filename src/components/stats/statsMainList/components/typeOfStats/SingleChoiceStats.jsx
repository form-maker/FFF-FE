import React from "react";
import styled from "styled-components";
import ApexCharts from "react-apexcharts";

import Title from "../Title";
import StatsHeaderContainer from "../statsContainer/StatsHeaderContainer";

const SingleChoiceStats = ({ stats }) => {
  let answerList = stats.selectList?.map((answer) => answer.answer);
  let answerValueList = stats.selectList?.map((answer) => answer.value);

  let options = {
    series: [
      {
        name: stats?.questionTitle,
        data: answerValueList,
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "70%",
          barHeight: "20%",
          horizontal: true,
          dataLabels: {
            position: "top",
          },
          colors: {
            ranges: [
              {
                from: 30,
                to: 100,
                color: "#96CDF5",
              },
            ],
          },
        },
      },
      colors: ["#BBE0FA", "#BBE0FA", "#BBE0FA", "#BBE0FA", "#BBE0FA"],
      dataLabels: {
        enabled: true,
        offsetX: 30,
        formatter: function (val) {
          return val + "%";
        },
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: answerList,
        labels: {
          show: true,
          formatter: function (val) {
            return val + "%";
          },
          style: {
            color: "#9E9E9E",
            fontSize: "12px",
            fontFamily: "Pretendard",
            fontWeight: 500,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        show: true,
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          offsetY: -20,
          offsetX: 40,
          style: {
            color: "#000000",
            fontSize: "1.2rem",
            fontFamily: "Pretendard",
            fontWeight: 500,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#ECECEC",
        strokeDashArray: 12,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
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
      <>
        <ApexCharts
          options={options.options}
          series={options.series}
          type="bar"
          height={300}
          width={460}
        />
      </>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  width: 47.2rem;
  height: 41.6em;

  background: #ffffff;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export default SingleChoiceStats;
