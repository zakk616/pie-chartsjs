drawChart("#pie-chart", ["Open", "Closed"], [331, 266]);
drawChart("#pie-chart2", ["Open", "Closed"], [110, 490]);
drawChart("#pie-chart3", ["Open", "Closed"], [95, 150]);

function drawChart(id, _labels, _data) {
  const ctx = document.querySelector(id);
  const labels = _labels;

  const data = {
    labels,
    datasets: [
      {
        data: _data,
        label: "Favourite Colour",
        backgroundColor: ["#eb1d24", "#303840"],
        hoverOffset: 15,
      },
    ],
  };

  const config = {
    type: "pie",
    data,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          titleFont: { weight: "light" },
        },
        // labels: {
        //   render: "percentage",
        //   fontColor: "#fff",
        //   precision: 2,
        // },

        labels: [
          // {
          //   render: 'label',
          //   position: 'outside',
          //   fontColor: "#000",
          // },
          {
            render: 'percentage',
            fontColor: "#fff",
            precision: 2,
          }
        ]
      },
      legend: {
        position: "bottom",
      },
    },
  };

  const pieChart = new Chart(ctx, config);
}
