import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";
import ApexCharts from "react-apexcharts";

const StarStats = ({ stats }) => {
  let answerNameList = [];
  for (let i = 1; i <= stats.satisfactionList?.length; i++) {
    answerNameList.push(i);
  }

  let options = {
    series: [
      {
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
      <Header>
        <TitleContainer>
          <p>{stats.questionType}</p>
          <h2>
            {stats.questionNum}. {stats.questionTitle}
          </h2>
          <h4>{stats.questionSummary}</h4>
        </TitleContainer>
        <Average>평점: {stats.questionAvg}</Average>
      </Header>
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
  width: 47.2rem;
  height: 41.6em;
  background: #ffffff;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 3rem 0 3rem;
`;

const TitleContainer = styled.div`
  p {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0;
  }
  h2 {
    ${fonts.Body1}
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin: 0;
    margin-top: 0.6rem;
  }
  h4 {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0;
    margin-top: 0.7rem;
  }
`;

const Average = styled.div`
  ${fonts.Body3}
  height: 3.3rem;
  width: 7.3rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  background: ${({ theme }) => theme.lightMainColor};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  margin: 1rem 0 0 1rem;
`;

export default StarStats;
