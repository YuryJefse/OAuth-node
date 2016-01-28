var
  AccessToken = require("./oauth-accesstoken.js"),
  RefreshToken = require("./oauth-refreshtoken.js"),
  Client = require("./oauth-client.js"),
  AuthCode = require("./oauth-authcode.js");


// node-oauth2-server API
module.exports.getAuthCode = AuthCode.getAuthCode;
module.exports.saveAuthCode = AuthCode.saveAuthCode;
module.exports.getAccessToken = AccessToken.getAccessToken;
module.exports.saveAccessToken = AccessToken.saveAccessToken;
module.exports.saveRefreshToken = RefreshToken.saveRefreshToken;
module.exports.getRefreshToken = RefreshToken.getRefreshToken;
module.exports.getUser = User.getUser;
module.exports.getClient = Client.getClient;
module.exports.grantTypeAllowed = Client.grantTypeAllowed;
