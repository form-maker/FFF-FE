import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";
import ApexCharts from "react-apexcharts";

const SlideStats = ({ stats }) => {
  const volume = stats.volume;
  let answerList = stats.satisfactionList?.map((answer, index) => {
    return { name: index - volume, data: [answer] };
  });

  console.log(stats);

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
        stackType: "100%",
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
          height={100}
          width={450}
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
  width: 47.2rem;
  height: 41.6em;
  background: #ffffff;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
`;

const ChartContainer = styled.div`
  margin-top: 8rem;
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

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem 0 3rem;
  position: absolute;
  width: 100%;
  top: 25.5rem;
`;

export default SlideStats;
