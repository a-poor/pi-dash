var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ exten27017ded: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Add Bootstrap and JQuery
app.use("/js",express.static(__dirname+"/node_modules/bootstrap/dist/js"));
app.use("/js",express.static(__dirname+"/node_modules/jquery/dist"));
app.use("/css",express.static(__dirname+"/node_modules/bootstrap/dist/css"));

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
