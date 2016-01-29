var Sequelize = require('sequelize'),
  config = require('./../config.json').dev,
  sequelize = new Sequelize(config.database, config.username, config.password, config);

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports.oauth = require("./oauth.js")(db);
module.exports.User = require('./user.js')(db);
module.exports.OAuthClientsModel = require('./oauth-client.js')(db);
