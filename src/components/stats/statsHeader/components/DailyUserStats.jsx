import React from "react";
import styled from "styled-components";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

const DailyUserStats = () => {
  const statsList = useSelector((state) => state.stats.stats);

  let options = {
    series: [
      {
        name: "날짜 별 응답자 수",
        data: statsList?.dailyParticipantList?.participant,
      },
    ],
    options: {
      colors: ["#7AB0FE"],
      chart: {
        type: "line",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: statsList?.dailyParticipantList?.date,
        labels: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        borderColor: "white",
        label: {
          show: false,
          borderColor: "white",
          style: {
            color: "#fff",
            borderColor: "white",
          },
        },
      },
      grid: { show: false },
      legend: {
        show: false,
      },
    },
  };

  return (
    <Container>
      <div>
        <ApexCharts
          type="line"
          series={options.series}
          options={options.options}
          height={100}
          width={900}
        ></ApexCharts>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100rem;
  height: 10rem;
  /* border: 0.2rem solid ${({ theme }) => theme.subColor}; */
  /* border-radius: 1rem; */
  padding: 0 1rem;
`;

export default DailyUserStats;
