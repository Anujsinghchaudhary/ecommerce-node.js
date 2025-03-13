var express = require('express');
var ejs = require('ejs');
var bodyParser = requires('body-parser');
var mysql= require('mysql')

mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_project"
})

var app = express();

app.use(express.static('public')); //fects data from public folder
app.set('view engine', 'ejs'); //sets view engine to ejs
app.listen(8080); //open localhost:8080
app.use(bodyParser.urlencoded({exteneded:true}));


app.get('/', function(req, res) {

    
    con.query("SELECT * FROM PRODUCTS", (err, result) => {
        res.render('pages/index', {result: result});
    });

});