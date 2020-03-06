var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send({"Hello": req.query.name?req.query.name:"Pass name in Query String. url/?name=yourname"});
});

var port = process.env.PORT || 3000

app.listen(port);
