import React from "react";
import styled from "styled-components";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

const DailyUserStats = () => {
  const statsList = useSelector((state) => state.stats.stats);

  let options = {
    series: [
      {
        data: statsList?.dailyParticipantList?.participant,
      },
    ],
    options: {
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },

      chart: {
        type: "area",
        height: 350,
        stacked: true,
        zoom: {
          enabled: false,
        },
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
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1.4,
      },
      title: {
        text: "날짜 별 응답자 수",
        align: "left",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: statsList?.dailyParticipantList?.date,
        show: true,
      },
      yaxis: {
        label: {
          show: true,
          borderColor: "white",
          style: {
            color: "#fff",
            borderColor: "white",
          },
        },
      },
      grid: { show: true },
      legend: {
        show: false,
      },
    },
  };

  return (
    <Container>
      <ApexCharts
        type="area"
        series={options.series}
        options={options.options}
        height={320}
        width={980}
      ></ApexCharts>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  box-shadow: 0px 0px 9.08108px 3.89189px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem 0rem 3rem;
`;

export default DailyUserStats;
