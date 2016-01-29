//var OAuthAccessTokensSchema = {
//  accessToken: { type: String, required: true, unique: true },
//  clientId: String,
//  userId: { type: String, required: true },
//  expires: Date
//};

module.exports = function (db) {
  var
    sequelize = db.Sequelize,
    OAuthAccessToken = db.sequelize.define('OAuthAccessTokens', {
      accessToken: { type: sequelize.STRING, allowNull: false, unique: true },
      clientId: sequelize.STRING,
      userId: { type: sequelize.STRING, allowNull: false },
      expires: sequelize.DATE
    });

  db.sequelize.sync();

  function getAccessToken(bearerToken, callback) {
    OAuthAccessToken.find({ where: { accessToken: bearerToken}})
      .then(function(accessToken) {
        if (!accessToken) {
          throw new Error('Não foi encontrado');
        }

        callback(null, accessToken);
      });
  }

  return {

    getAccessToken: getAccessToken,

    saveAccessToken: function(token, clientId, expires, userId, callback) {
      getAccessToken(token, function (err, accessToken) {
        if (!accessToken) {
          throw new Error('token inválido');
        }

        accessToken.clientId = clientId;
        accessToken.expires = expires;
        accessToken.userId = userId;

        accessToken.save();
      });
    }
  };
};
