// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
  
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
  
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  
    // Create the data table PieChart
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
    ['PP', 137],
    ['PSOE', 85],
    ['Podemos', 45],
    ['Ciudadanos', 32],
    ['Others', 39]
    ]);
    
    // Set chart options
    var options = {'title':'Votes to the Congress of the Deputies',
                'width':400,
                'height':400};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);

    // Create the data table Table Charts
    var data2 = google.visualization.arrayToDataTable([
        ['City', '2010 Population',],
        ['New York City, NY', 8175000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],
        ['Philadelphia, PA', 1526000]
      ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
    }

    var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data2, options);
}