google.charts.load('current', {packages:['corechart']});
google.charts.setOnLoadCallback(drawBarChart);
  function drawBarChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Applications');
    data.addRows([
      ['Jan to Feb 2016', 70],
      ['Feb to March 2016', 80],
      ['March to April 2016', 95],
      ['April to May 2016', 105],
      ['May to June 2016', 120]
    ]);

   var options = {
     title: 'Monthly Applications',
     legend: 'none',
     animation:{
      "startup": true,
      duration: 1500,
      easing: 'out',
    },
     bar: {
       groupWidth: '95%'
     },
     vAxis: {
       gridlines: {
         count: 4
       }
      }
   };

   var chart = new google.visualization.ColumnChart(document.getElementById('number_format_chart'));
   chart.draw(data, options);
  }

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineChart);

function drawLineChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Applications');

      data.addRows([
        [0, 0],   [1, 70],  [2, 80],  [3, 95],  [4, 105],  [5, 120]
      ]);

      var options = {
        title: 'Monthly Applications',
        animation:{
        "startup": true,
         duration: 1500,
         easing: 'out',
       },
        hAxis: {
          title: 'Month'
        },
        vAxis: {
          title: 'Applications'
        },
        backgroundColor: '#ffffff'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
// for responsiv chart
$(window).resize(function(){
  drawBarChart();
  drawLineChart();
});
