/* eslint-disable react/prop-types */

import ReactApexChart from "react-apexcharts";
import "./Chart.css";

const Chart = ({
  currencyTimeSeries,
  selectedCurrencyFrom,
  selectedCurrencyTo,
}) => {
  if (!selectedCurrencyFrom || !selectedCurrencyTo) {
    // Se non sono definiti, restituisci un messaggio di errore o gestiscili in modo appropriato
    return <div>Valute selezionate non valide</div>;
  }
  const series = [
    {
      name: `Cambio ${selectedCurrencyFrom.code} - ${selectedCurrencyTo.code}`,
      data: currencyTimeSeries.map((item) => item.value),
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 200,
      width: "100%",
      foreColor: "var(--text-color)",

      fontFamily: "Outfit, sans serif",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: `Andamento prezzi da ${selectedCurrencyFrom.code} a ${selectedCurrencyTo.code}`,
      align: "left",
      style: {
        color: "var(--text-color)",
        fontSize: "22px",
        fontWeight: "600",
        // margin: 8,
      },
    },

    labels: currencyTimeSeries.map((item) => item.date),
    xaxis: {
      type: "datetime",
      datetimeFormatter: {
        day: "dd MMM",
      },
      style: {
        color: "var(--text-color)",
        fontSize: "14px",
      },
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      horizontalAlign: "left",
    },
    tooltip: {
      theme: true, // Abilita l'etichetta tooltip
      style: {
        color: "var(--text-color)",
        background: "var(--color-background)",
      },
    },
  };

  return (
    <>
      <div id='chart'>
        <ReactApexChart
          options={options}
          series={series}
          type='area'
          width={"100%"}
        />
      </div>
      <div id='html-dist'></div>
    </>
  );
};

export default Chart;
