//var OAuthAuthCodeSchema = {
//  authCode: { type: String, required: true, unique: true },
//  clientId: String,
//  userId: { type: String, required: true },
//  expires: Date
//};

module.exports = function (db) {
  var
    sequelize = db.Sequelize,
    OAuthAuthCode = db.sequelize.define('OAuthAuthCodes', {
      authCode: { type: sequelize.STRING, allowNull: false, unique: true },
      clientId: sequelize.STRING,
      userId: { type: sequelize.STRING, allowNull: true },
      expires: sequelize.DATE
    });

  db.sequelize.sync();

  function getAuthCode(authcode, callback){
    OAuthAuthCode.find({ where: { authCode: authcode}})
      .then(function (oauthAuthCode) {
        if (!oauthAuthCode) {
          throw new Error('não foi encontrado');
        }
        callback(null, oauthAuthCode);
      });
  }

  return {

    getAuthCode: getAuthCode,

    saveAuthCode: function(code, clientId, expires, userId, callback) {
      getAuthCode(code, function (err, oauthAuthCode) {
        if (!oauthAuthCode) {
          throw new Error('code inválido');
        }


        oauthAuthCode.clientId = clientId;
        oauthAuthCode.expires = expires;
        oauthAuthCode.userId = userId;

        oauthAuthCode.save();
      });
    }
  };
};
