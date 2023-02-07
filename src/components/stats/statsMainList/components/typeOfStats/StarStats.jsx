import React from "react";
import styled from "styled-components";
import ApexCharts from "react-apexcharts";

import fonts from "../../../../../styles/fonts";
import Title from "../Title";
import StatsHeaderContainer from "../statsContainer/StatsHeaderContainer";

const StarStats = ({ stats }) => {
  let answerNameList = [];
  for (let i = 1; i <= stats.satisfactionList?.length; i++) {
    answerNameList.push(i);
  }

  console.log(stats.questionTitle);

  let options = {
    series: [
      {
        name: stats?.questionTitle,
        data: stats?.satisfactionList,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: "40%",

          dataLabels: {
            position: "top",
          },
          colors: {
            ranges: [
              {
                from: 40,
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
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -30,
        style: {
          fontSize: "12px",
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
          show: true,
          formatter: function (val) {
            return val + "점";
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: true,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#ECECEC",
        strokeDashArray: 12,
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
        <Average>평점: {stats.questionAvg}</Average>
      </StatsHeaderContainer>
      <ChartContainer>
        <ApexCharts
          options={options.options}
          series={options.series}
          type="bar"
          height={300}
          width={440}
        />
      </ChartContainer>
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

const Average = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.3rem;
  width: 7.3rem;

  ${fonts.Body3}
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;

  background: ${({ theme }) => theme.lightMainColor};
  border-radius: 1rem;
`;

const ChartContainer = styled.div`
  margin: 1rem 0 0 1.5rem;
`;

export default StarStats;
