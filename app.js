var express = require('express');
var app = express();

app.configure(function() {
    app.use("/scripts", express.static(__dirname + '/scripts'));
    app.use("/tests", express.static(__dirname + '/tests'));

});

app.get("/", function(req, res) {
    res.sendfile(__dirname + '/index.html');
});


app.listen(4000);
