module.exports = function (db) {
  var
    bcrypt = require("bcryptjs"),
    sequelize = db.Sequelize;

  var User = db.sequelize.define('Users', {
    email: { type: sequelize.STRING, unique: true, allowNull: false },
    hashed_password: { type: sequelize.STRING, allowNull: false },
    password_reset_token: { type: sequelize.STRING, unique: true },
    reset_token_expires: sequelize.DATE,
    firstname: sequelize.STRING,
    lastname: sequelize.STRING
  });

  db.sequelize.sync();

  function hashPassword(password) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  function authenticate(email, password, callback) {
    User.find({ where: {email: email }})
      .then(function (user) {
        if (!user) {
          throw new Error('não foi encontrado');
        }

        if (!bcrypt.compareSync(password, user.hashed_password)) {
          throw new Error('senha inválida');
        }

        callback(null, user);
      })
      .catch(function (err) {
        console.log(err);
        callback(err, null);
      });
  }

  return{
    table: User,
    authenticate: authenticate,

    getUser: function (email, password, callback) {

      authenticate(email, password, callback);
    },

    register: function (user, callback) {
      user.hashed_password = hashPassword(user.password);
      delete user.password;

      User.create(user)
        .then(function (u) {
          console.log('success');
          callback(null, u);
        })
        .catch(function (err) {
          console.log('error');
        });
    }
  };
};
