
var ctx = document.getElementById("workChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["HR", "LR", "LS", "LSBW", "OFFSETGTO", "OFFSETSM", "OFFSETX", "PLAT", "SHR"],
    datasets: [{
      label: '# of Votes',
      data: [789, 2763, 2820, 168, 16, 441, 16, 263, 54],
      backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255,235,59, 0.2)',
      'rgba(2,119,189 , 0.2)',
      'rgba(109,76,65 , 0.2)'
      ],
      borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255,235,59, 1)',
      'rgba(2,119,189 , 1)',
      'rgba(109,76,65 , 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  },
  options: {
    legend: {
      display: false
    }
  }
});