var express = require('express');
var app = express();

process.on('uncaughtException', function(err) {
    if(err.errno === 'EADDRINUSE'){
         console.log(err);
         }
    else{
         console.log(err);
         }
    process.exit(1);
});

app.configure(function(){
  app.use("/scripts", express.static(__dirname + '/scripts'));

});

 app.get("/", function(req, res) {
    res.sendfile(__dirname + '/index.html')
 });

app.listen(4000);

