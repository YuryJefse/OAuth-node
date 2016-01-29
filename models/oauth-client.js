module.exports = function (db) {
  var
    sequelize = db.Sequelize,
    OAuthClient = db.sequelize.define('OAuthClients', {
      clientId: sequelize.STRING,
      clientSecret: sequelize.STRING,
      redirectUri: sequelize.STRING
    });

  db.sequelize.sync();

  return {

    getClient: function (clientId, clientSecret, callback) {
      var params = { clientId: clientId };
      if (clientSecret !== null) {
        params.clientSecret = clientSecret;
      }
      OAuthClients.find({ where: params })
        .then(function (oauthClient) {
          if (!oauthClient) {
            throw new Error('não foi encontrado');
          }
          callback(null, oauthClient);
        });
    },

    grantTypeAllowed: function (clientId, grantType, callback) {
      //if (grantType === 'password' || grantType === 'authorization_code') {
      //}
      //Validar se o client tem permissão
      callback(false, true);
    }
  };
};
