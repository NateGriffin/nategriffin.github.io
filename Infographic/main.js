google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['HTML', 35],
        ['JavaScript', 15],
        ['CSS', 25],
        ['C#', 25],

    ]);

    var options = {
        title: 'Skills',
        'backgroundColor': 'transparent',
        color: '#ffffff',
        auraColor: '#d799ae',
  legend: {
        textStyle: { color: 'white' }
    },
        fontName: 'Oswald',
        titleTextStyle: {
            color: '#ffffff'
        },
        
        colors: ['#3775c9', '#4b83cf', '#5f91d4', '#9bbae4', '#4bc4cf'], 'is3D': true


    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}