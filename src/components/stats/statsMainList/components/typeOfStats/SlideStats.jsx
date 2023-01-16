import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";
import ApexCharts from "react-apexcharts";

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
        height: 200,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: false,
            },
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -30,
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
        show: false,
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
      fill: {
        opacity: 1,
      },

      legend: {
        show: false,
      },
      grid: { show: false },
    },
  };

  return (
    <Container>
      <Title>{stats.questionTitle}</Title>
      <CartContainer>
        <ApexCharts
          options={options.options}
          series={options.series}
          type="bar"
          height={80}
          width={300}
        />
      </CartContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartContainer = styled.div`
  margin-top: 10rem;
  padding-left: 1rem;
`;

const Title = styled.h2`
  ${fonts.Body2}
  width: 18rem;
  position: absolute;
`;

export default SlideStats;
