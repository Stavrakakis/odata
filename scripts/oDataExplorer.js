var oDataExplorer = (function() {
    var module = {};

    module.getPropertyNames = function(dataset) {
        var columns = Object.getOwnPropertyNames(dataset[0]);
        var index = columns.indexOf("__metadata");

        if (index > -1) {
            columns.splice(index, 1);
        }
        return columns;
    };

    module.drawTable = function(columns, data, element) {
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

    return module;
}());
