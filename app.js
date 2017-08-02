var express = require('express'),
    path    = require('path'),
    favicon = require('serve-favicon'),
    logger  = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    appRoutes = require('./routes/app');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// connecting to MLAB
var mlabCredentials = {
  dbUser: 'adi',
  dbpassword: 123
};

// mongoose.connect(`mongodb://${mlabCredentials.dbUser}:${mlabCredentials.dbpassword}@ds115573.mlab.com:15573/evo_db`, { useMongoClient: true});
mongoose.connect('mongodb://localhost:27017/evoDb', { useMongoClient: true });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// if angular runs on a diffrent server it will use this headers

app.use(function (req, res, next) {
    // allow any other domain to acces this server
    res.setHeader('Access-Control-Allow-Origin', '*');
    // setup witch headers i want to allow on every incomming request
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //  serup wich http method i want to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
