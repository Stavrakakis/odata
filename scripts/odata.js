var svc = 'http://services.odata.org/V3/Northwind/Northwind.svc/';
var drawTable = function(columns, data, element) {
    var table = d3.select(element);

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    var headers = thead.append("tr").selectAll("th").data(columns).enter().append("th").text(function(d) {
        return d;
    });

    var rows = tbody.selectAll('tr').data(data);

    rows.enter().append('tr');

    var cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                };
            });
        })
        .enter()
        .append("td")
        .html(function(d) {
            return d.value;
        });

    $(element).dataTable();
};

var getPropertyNames = function(dataset) {
    var columns = Object.getOwnPropertyNames(dataset[0]);
    var index = columns.indexOf("__metadata");

    if (index > -1) {
        columns.splice(index, 1);
    }
    return columns;
};

$(document).ready(function() {

    OData.defaultHttpClient.enableJsonpCallback = true;

    var context = {
        name: "oData",
        url: svc,
        oDataServiceHost: svc,
        enableJsonpCallback: true,
        maxDataServiceVersion: "3.0",
        dataServiceVersion: "3.0"
    };

    OData.read(
        "http://services.odata.org/Northwind/Northwind.svc/Customers",
        function(data) {
            var results = data.results;

            var columns = getPropertyNames(results);

            drawTable(columns, results, '#customers');

        }
    );

    OData.read(
        "http://services.odata.org/Northwind/Northwind.svc/Suppliers",
        function(data) {
            var results = data.results;

            var columns = getPropertyNames(results);

            drawTable(columns, results, '#suppliers');

        }
    );

    OData.read(
        "http://services.odata.org/Northwind/Northwind.svc/Products",
        function(data) {
            var results = data.results;

            var columns = getPropertyNames(results);

            drawTable(columns, results, '#products');

        }
    );
});
