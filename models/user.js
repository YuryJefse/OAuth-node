var bcrypt = require("bcryptjs");

//var OAuthUsersSchema = {
//  email: { type: String, unique: true, required: true },
//  hashed_password: { type: String, required: true },
//  password_reset_token: { type: String, unique: true },
//  reset_token_expires: Date,
//  firstname: String,
//  lastname: String
//}

function hashPassword(password) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function authenticate(email, password, callback) {

}

module.exports.authenticate = authenticate;

module.exports.getUser = function (email, password, callback) {
  //eh necessario chamar a func authenticate para validar o retorno
};

module.exports.register = function (user, callback) {

};
