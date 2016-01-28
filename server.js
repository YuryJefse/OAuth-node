var
  express = require('express'),
  session = require('express-session'),
  path = require('path'),
  oauthserver = require('oauth2-server'),
  morgan = require('morgan');

var
  //config = require('./config.json'),
  app = express();
