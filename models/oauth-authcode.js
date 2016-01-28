var request = require('request');
var config = require('./../config.json');

//var OAuthAuthCodeSchema = {
//  authCode: { type: String, required: true, unique: true },
//  clientId: String,
//  userId: { type: String, required: true },
//  expires: Date
//};

module.exports.getAuthCode = function(authcode, callback){
  //pesquisa pelo codigo e retorna ele no callback
};

module.exports.saveAuthCode = function(code, clientId, expires, userId, callback) {
  //savar o objeto AuthCode
};
