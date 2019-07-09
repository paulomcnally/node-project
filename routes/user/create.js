const controllers = require('../../controllers/');

module.exports = function (router) {
  router.post('/', controllers.user.create);
};