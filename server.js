var
  express = require('express'),
  session = require('express-session'),
  path = require('path'),
  oauthserver = require('oauth2-server'),
  morgan = require('morgan');
  models = require('./models');

var app = express();

var User = models.User;

//User.register({ email: 'yury@gmail.com', password: '123456' },
//  function (err, success) {
//
//});

//User.getUser('yury@gmail.com', 'asdf', function (err, user) {
//  if (err) {
//    console.log('Erro externo ' + err);
//  } else{
//    console.log(user.dataValues);
//  }
//});

console.log('Listen...');
