
var OpenRequests = {
  categories:["Production", "HVAC", "QA", "Civil"],
  colors:["#303840", "red","Gray", "green"],
  values:[331, 266, 331, 400]
}

var Admin = {
  categories:["Open", "Closed"],
  colors:["#303840", "red"],
  values:[425, 234]
}

drawChart("#pie-chart", OpenRequests.categories,OpenRequests.colors, OpenRequests.values);
drawChart("#pie-chart2",Admin.categories, Admin.colors, Admin.values);
drawChart("#pie-chart3", ["Open", "Closed"],["#eb1d24", "#303840"], [95, 150]);

function drawChart(id, _labels, _colors, _data) {
  const ctx = document.querySelector(id);
  const labels = _labels;

  const data = {
    labels,
    datasets: [
      {
        data: _data,
        label: "Favourite Colour",
        backgroundColor: _colors,
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
