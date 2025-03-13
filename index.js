var express = require('express');
var ejs = require('ejs');


var app = express();

app.use(express.static('public')); //fects data from public folder
app.set('view engine', 'ejs'); //sets view engine to ejs
app.listen(8080); //open localhost:8080


app.get('/', function(req, res) {

    res.render('pages/index');

});