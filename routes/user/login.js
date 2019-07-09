const controllers = require('../../controllers/');

module.exports = (router) => {
  router.get('/', controllers.user.login);
  router.post('/', controllers.user.login);
};
