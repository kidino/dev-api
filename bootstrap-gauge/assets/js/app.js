google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

var gauge1, gauge2, gauge3, gauge1;
var data1, data2, data3, data4;

var options = {
    minorTicks: 5,
    min : 0,
    max : 100
  };

function drawChart() {

    gauge1 = new google.visualization.Gauge(document.getElementById('gauge1'));
    gauge2 = new google.visualization.Gauge(document.getElementById('gauge2'));
    gauge3 = new google.visualization.Gauge(document.getElementById('gauge3'));
    gauge4 = new google.visualization.Gauge(document.getElementById('gauge4'));

    data1 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],["Water Tank", 0]
      ]);

    data2 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],["Fertigation", 0]
      ]);

    data3 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],["Soil Temperature", 0]
      ]);

    data4 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],["Water Soil Humidity", 0]
      ]);

      fetch_data();
}

// header('Access-Control-Allow-Origin: *');
// header('Content-type: application/json');

function fetch_data() {
    fetch('https://io-scout.com/Syahmi/agri/fetch_data.php') // Fetch data from external source
    .then((response) => response.json())
    .then((jsonData) => {

        var agri_data = jsonData[0];

      // Add the new data points to the data array (transposed)
      data1.setValue(0,1, agri_data.watertank);
      data2.setValue(0,1, agri_data.fertigationtank );
      data3.setValue(0,1, agri_data.soiltemp );
      data4.setValue(0,1, agri_data.soilhumidity );

      gauge1.draw(data1, options);
      gauge2.draw(data2, options);
      gauge3.draw(data3, options);
      gauge4.draw(data4, options);
    })
    .catch((error) => {
      // Handle error if needed
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      // Fetch new data every 1 second
      setTimeout(fetch_data, 1000);
    });
}