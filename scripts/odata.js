
$(document).ready(function() {

    OData.defaultHttpClient.enableJsonpCallback = true;

    OData.read(
        "http://services.odata.org/Northwind/Northwind.svc/Customers",
        function(data) {
            var results = data.results;

            var columns = oDataExplorer.getPropertyNames(results);

            oDataExplorer.drawTable(columns, results, '#customers');

        }
    );

    OData.read(
        "http://services.odata.org/Northwind/Northwind.svc/Suppliers",
        function(data) {
            var results = data.results;

            var columns = oDataExplorer.getPropertyNames(results);

            oDataExplorer.drawTable(columns, results, '#suppliers');

        }
    );

    OData.read(
        "http://services.odata.org/Northwind/Northwind.svc/Products",
        function(data) {
            var results = data.results;

            var columns = oDataExplorer.getPropertyNames(results);

            oDataExplorer.drawTable(columns, results, '#products');

        }
    );
});
