var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var appRoutes = require('./app');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
/*app.use(session({
    secret: 'a4f8071f-c873-4447-8ee2',
    cookie: { maxAge: 2628000000 }
}));*/
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.redirect('/authenticate');
});

app.listen(3000,function(req,res){
console.log("Server is Running on port 3000");
});
//module.exports = app;

