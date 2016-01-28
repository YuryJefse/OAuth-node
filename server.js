var
  express = require('express'),
  session = require('express-session'),
  path = require('path'),
  oauthserver = require('node-oauth2-server');

var
  app = express();

app.set('env', process.env.NODE_ENV || 'development');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.cookieParser());
app.use(express.cookieSession());

app.locals.pretty = true;

app.use(express.bodyParser());
app.use(express.methodOverride());

app.oauth = oauthserver({
  model: {}, //the user model
  grants: ['password', 'authorization_code', 'refresh_token'],
  debug: true
});
