// node-oauth2-server API
module.exports = function (db) {
  var
    AccessToken = require("./oauth-accesstoken.js")(db),
    RefreshToken = require("./oauth-refreshtoken.js")(db),
    Client = require("./oauth-client.js")(db),
    User = require('./user.js'),
    AuthCode = require("./oauth-authcode.js")(db);

  return {
    getAuthCode: AuthCode.getAuthCode,
    saveAuthCode: AuthCode.saveAuthCode,
    getAccessToken: AccessToken.getAccessToken,
    saveAccessToken: AccessToken.saveAccessToken,
    saveRefreshToken: RefreshToken.saveRefreshToken,
    getRefreshToken: RefreshToken.getRefreshToken,
    grantTypeAllowed: Client.grantTypeAllowed,
    getClient: Client.getClient,
    getUser: User.getUser
  };
};
