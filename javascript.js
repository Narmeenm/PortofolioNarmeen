//pie
    var ctxP = document.getElementById("pieChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["digital Transformer","Web developer"],
        datasets: [{
          data: [42,58],
          backgroundColor: ["#ad5389","#3c1053"],
          hoverBackgroundColor: ["#D8BFD8", "#EE82EE"]
        }]
      },
      options: {
        responsive: true
      }
    });
