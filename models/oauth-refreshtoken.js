//var OAuthRefreshTokensSchema = {
//  refreshToken: { type: String, required: true, unique: true },
//  clientId: String,
//  userId: { type: String, required: true },
//  expires: Date
//};

module.exports= function (db) {

  return {

    saveRefreshToken: function(token, clientId, expires, userId, callback) {

    },

    getRefreshToken: function(refreshToken, callback) {
      //Devido a uma falha do oauth-server, eh necessario criar o atributo
      //user e setar o valor igual ao userId
      //
      //ex.: token.user = token.userId;
    }
  };
};
