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
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        formatter: function (val) {
          return val + "%";
        },
        style: {
          fontSize: "10px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: answerList,
        labels: {
          show: false,
        },
        style: {
          fontSize: "10px",
          colors: ["#304758"],
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
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      grid: { show: false },
    },
  };

  return (
    <Container>
      <Title>{stats.questionTitle}</Title>
      <ApexCharts
        options={options.options}
        series={options.series}
        type="bar"
        height={200}
        width={260}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 30rem;
  height: 30em;
  border: 0.1rem solid blue;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
`;

const Title = styled.h2`
  ${fonts.Body2}
  width: 18rem;
`;

export default SingleChoiceStats;
