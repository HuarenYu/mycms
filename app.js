var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var admin = require('./routes/admin');
var models = require('./models');
var config = require('./config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set global variables
app.use(function(req, res, next) {
  config.getConfigs().then(function(configs) {
    req.configs = configs;
    res.locals.configs = configs;
    next();
  });
});

app.use('/', index);
app.use('/admin*', basicAuth);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function basicAuth(req, res, next) {
  var authToken = req.get('Authorization');
  if (!authToken) {
    res
      .status(401)
      .set('WWW-Authenticate', 'Basic realm="Login required"')
      .end();
    return;
  }
  var tmp = new Buffer(authToken.substring(6), 'base64').toString();
  if (!tmp) {
    res
      .status(401)
      .send('Permission denided.')
      .end();
  }
  var userInfo = tmp.toString().split(':');
  var name = userInfo[0];
  var pwd = userInfo[1];
  var meta = JSON.parse(req.configs.meta);
  if (name === meta.username && pwd === meta.password) {
    next();
    return;
  }
  res
    .status(401)
    .send('Permission denided.')
    .end();
}

module.exports = app;
