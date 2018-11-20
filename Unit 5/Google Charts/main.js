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
    ['Ciudadanos', 45],
    ['Podemos', 32],
    ['Others', 39]
    ]);
    
    // Set chart options
    var options = {'title':'Votes to the Congress of the Deputies',
                'width':400,
                'height':400};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);    

    var data2 = google.visualization.arrayToDataTable([
            ['Political party', 'Bench'],
            ['PP', 137],
            ['PSOE', 85],
            ['Podemos', 45],
            ['Ciudadanos', 32],
            ['Others', 39]
        ]);

      var options2 = {
        title: 'Votes to the Congress of the Deputies',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Votes',
          minValue: 0
        },
        vAxis: {
          title: 'Elections 2016'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

      chart.draw(data2, options2);
    }


    setTimeout();