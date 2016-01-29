var models = require('./../models');
var User = models.User;

function requiresUser(req, res, next) {
  if (req.session.userId) {
    req.user = { id: req.session.userId };
    next();
  } else {
    res.app.oauth.authorise()(req, res, next);
  }
}

function loadUser(req, res, next) {
  User.table.find({ where: { email: req.session.userId }})
    .then(function (user) {
      res.locals.user = user;
      next();
    })
    .catch(function (err) {
      next(err);
    });
}

function isValidationError(err) {
  return err && err.name === 'ValidationError';
}

function notFoundHandler(req, res, next) {
  res.status(404);
  res.format({
    json: function () {
      res.send({error: 'Not Found'});
    }
  });
}

module.exports.requiresUser = requiresUser;
module.exports.loadUser = loadUser;
module.exports.isValidationError = isValidationError;
module.exports.notFoundHandler = notFoundHandler;
