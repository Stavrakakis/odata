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
        
        $data.initService(context).then(function (database) {
            
            db = database;
            var customers = db.Customers.forEach(function(d){
                console.log(d);
                
            });
        });
    
    });
