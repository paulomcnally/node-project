const controllers = require('../../controllers/');

module.exports = function (router) {
  router.get('/', controllers.user.login);
  router.post('/', controllers.user.login);
};