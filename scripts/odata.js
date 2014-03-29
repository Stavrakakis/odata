var svc = 'http://services.odata.org/V3/Northwind/Northwind.svc/';

    $(document).ready(function(){
        
        OData.defaultHttpClient.enableJsonpCallback = true;
        
        var context = {name: "oData",
            url: svc,
            oDataServiceHost: svc,
            enableJsonpCallback: true,
            maxDataServiceVersion: "3.0",
            dataServiceVersion: "3.0" 
        };
        
        var db;
        
        OData.read( 
          "http://services.odata.org/Northwind/Northwind.svc/Customers", 
          function (data) { 
            var results = data.results;
            var columns = Object.getOwnPropertyNames(results[0]);
            var index = columns.indexOf("__metadata");
            
            if (index > -1) {
                columns.splice(index, 1);
            }
            
            
            
            var table = d3.select('#customers');
            
            var thead = table.append("thead");
            var tbody = table.append("tbody");
            
            var headers = thead.append("tr").selectAll("th").data(columns).enter().append("th").text(function(d){return d;});
            
            var rows = tbody.selectAll('tr').data(results);
        
            rows.enter().append('tr');
            
            var cells = rows.selectAll("td")
                .data(function(row) {
                    return columns.map(function(column) {
                        return {column: column, value: row[column]};
                    });
                })
                .enter()
                .append("td")
                .html(function(d) {return d.value; });
                
                $('#customers').dataTable();
          } 
        );
        
    
    });
