//var OAuthRefreshTokensSchema = {
//  refreshToken: { type: String, required: true, unique: true },
//  clientId: String,
//  userId: { type: String, required: true },
//  expires: Date
//};

module.exports= function (db) {

  var
    sequelize = db.Sequelize,
    OAuthRefreshToken = db.sequelize.define('OAuthRefreshTokens', {
      refreshToken: { type: sequelize.STRING, unique: true },
      clientId: sequelize.STRING,
      userId: { type: sequelize.STRING, allowNull: false },
      expires: sequelize.DATE
    });

  db.sequelize.sync();

  return {

    saveRefreshToken: function(token, clientId, expires, userId, callback) {
      if (userId.id) {
        userId = userId.id;
      }

      var refreshToken = {
        refreshToken: token,
        clientId: clientId,
        userId: userId,
        expires: expires
      };

      OAuthRefreshToken.create(refreshToken)
        .then(function(refreshToken){
          console.log('RefreshToken created success');
          callback(null, refreshToken);
        });
    },

    getRefreshToken: function(refreshToken, callback) {
      //Devido a uma falha do oauth-server, eh necessario criar o atributo
      //user e setar o valor igual ao userId
      //
      //ex.: token.user = token.userId;
      OAuthRefreshToken.find({ where: { refreshToken: refreshToken }})
        .then(function (token) {
          if (!token) {
            throw new Error('não foi encontrado');
          }

          token.user = token.userId;

          callback(null, token);
        });
    }
  };
};
