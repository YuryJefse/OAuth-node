//var OAuthAuthCodeSchema = {
//  authCode: { type: String, required: true, unique: true },
//  clientId: String,
//  userId: { type: String, required: true },
//  expires: Date
//};

module.exports = function (db) {

  return {

    getAuthCode: function(authcode, callback){
      //pesquisa pelo codigo e retorna ele no callback
    },

    saveAuthCode: function(code, clientId, expires, userId, callback) {
      //savar o objeto AuthCode
    }
  };
};
