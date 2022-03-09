
//Primer gráfico
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('graphic1'));
    chart.draw(data, options);
}

//Segundo gráfico
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('graphic2'));
    chart.draw(data, options);
}

//Tercer gráfico
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {

    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Motivation Level');

    data.addRows([
        [{ v: [8, 0, 0], f: '8 am' }, 1],
        [{ v: [9, 0, 0], f: '9 am' }, 2],
        [{ v: [10, 0, 0], f: '10 am' }, 3],
        [{ v: [11, 0, 0], f: '11 am' }, 4],
        [{ v: [12, 0, 0], f: '12 pm' }, 5],
        [{ v: [13, 0, 0], f: '1 pm' }, 6],
        [{ v: [14, 0, 0], f: '2 pm' }, 7],
        [{ v: [15, 0, 0], f: '3 pm' }, 8],
        [{ v: [16, 0, 0], f: '4 pm' }, 9],
        [{ v: [17, 0, 0], f: '5 pm' }, 10],
    ]);

    var options = {
        title: 'Motivation Level Throughout the Day',
        hAxis: {
            title: 'Time of Day',
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {
            title: 'Rating (scale of 1-10)'
        }
    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('graphic3'));

    chart.draw(data, options);
}

//Cuarto gráfico

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('graphic4'));

    chart.draw(data, options);
}

//Quinto gráfico

google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawChart5);

function drawChart5() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('graphic5'));

    chart.draw(data, options);
}

//Sexto Gráfico

google.charts.load('current', { 'packages': ['timeline'] });
google.charts.setOnLoadCallback(drawChart6);
function drawChart6() {
    var container = document.getElementById('graphic6');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'President' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
        ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]]);

    chart.draw(dataTable);
}

