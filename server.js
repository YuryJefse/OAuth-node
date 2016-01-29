var
  express = require('express'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  cookieSession = require('cookie-session'),
  //methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  errorHandler = require('errorhandler'),
  path = require('path'),
  oauthserver = require('oauth2-server'),
  morgan = require('morgan'),
  models = require('./models'),
  middleware = require('./middleware');

var
  app = express(),
  User = models.User;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(cookieSession({keys: {}}));
app.use(bodyParser.json());
//app.use(methodOverride());

app.oauth = oauthserver({
  model: models.oauth,
  grants: ['password', 'authorization_code', 'refresh_token'],
  debug: true
});

app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== 'test') {
    console.error('Error', err);
  }

  if (middleware.isValidationError(err)) {
    res.status(400);
    res.send(err.errors);
  }else {
    res.status(err.code || 500);
    res.send('Error');
  }
});

if ('dev' === app.get('env')) {
  app.use(errorHandler());
}

app.listen(process.env.PORT || 3000, function() {
  console.log('Listen...');
});
