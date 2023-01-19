import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";
import ApexCharts from "react-apexcharts";

const SingleChoiceStats = ({ stats }) => {
  let answerList = stats.selectList?.map((answer) => answer.answer);
  let answerValueList = stats.selectList?.map((answer) => answer.value);

  let options = {
    series: [
      {
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
      <Header>
        <TitleContainer>
          <p>{stats.questionType}</p>
          <h2>
            {stats.questionNum}. {stats.questionTitle}
          </h2>
          <h4>{stats.questionSummary}</h4>
        </TitleContainer>
      </Header>
      <ChartContainer>
        <ApexCharts
          options={options.options}
          series={options.series}
          type="bar"
          height={300}
          width={460}
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

const ChartContainer = styled.div``;

export default SingleChoiceStats;
