//var OAuthAccessTokensSchema = {
//  accessToken: { type: String, required: true, unique: true },
//  clientId: String,
//  userId: { type: String, required: true },
//  expires: Date
//};

module.exports = function (db) {

  return {

    getAccessToken: function(bearerToken, callback) {
      //bearerToken eh o accessToken
    },

    saveAccessToken: function(token, clientId, expires, userId, callback) {

    }
  };
};
