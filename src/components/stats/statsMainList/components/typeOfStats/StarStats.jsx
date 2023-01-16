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
        name: "star",
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
          borderRadius: 10,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
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
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
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
        width={250}
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

export default StarStats;
