function drawAllCharts() {
    $('.allCharts').highcharts({
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'March', 'April', 'May',
                'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ]
        },
        labels: {
            items: [{
                html: 'Auto approved VS manual claims',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Auto',
            color: '#386C98',
            data: [3, 2, 1, 3, 4, 9, 10, 12, 13, 6, 9, 7]
        }, {
            type: 'column',
            name: 'Manual',
            color: '#424E5D',
            data: [2, 3, 5, 7, 6, 3, 7, 10, 9, 2, 4, 5]
        }, {
            type: 'pie',
            name: 'Auto VS Manual',
            data: [{
                name: 'Auto Approved',
                y: 13,
                color: '#386C98'
            }, {
                name: 'Manually Approved',
                y: 23,
                color: '#424E5D'
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
}

// line chart

function drawLineChart() {
    $('.lineChart').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ]

        },
        yAxis: {
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Auto Approved',
            color: '#386C98',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Manually Approved',
            color: '#424E5D',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
}

// calling all functions
drawAllCharts();
drawLineChart();

// for responsiv chart
$(window).resize(function() {
    drawAllCharts();
    drawLineChart();
});
