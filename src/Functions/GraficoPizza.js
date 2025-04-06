import React from "react";
import Chart from "react-apexcharts";
import { formataPercent } from "./Formatador";

function GraficoPizza({ labels, dados, titulo }) {
  const options = {
    labels: labels,
    title: {
      text: titulo,
      align: "center",
      style: {
        fontSize: "20px",
        color: "#fff",
      },
    },
    colors: ["#2c3338", "#3c434a", "#50575e", "#333333"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#ccc",
      },
    },
    tooltip: {
      y: {
        formatter: function (dados) {
            return formataPercent(dados)},
        },
      theme: "light",
    },
    dataLabels: {
      style: {
        colors: ["white"], 
      },
    },
    chart: {
      type: "pie",
    },
  };

  return (
    <div className="p-3 bg-dark rounded">
      <Chart
        options={options}
        series={dados}
        type="pie"
        width="100%"
        height="350"
      />
    </div>
  );
}

export default GraficoPizza;
