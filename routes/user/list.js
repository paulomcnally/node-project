const controllers = require('../../controllers/');

module.exports = function (router) {
  router.get('/', controllers.user.list);
};