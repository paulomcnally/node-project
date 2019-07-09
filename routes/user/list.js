const controllers = require('../../controllers/');

module.exports = (router) => {
  router.get('/', controllers.user.list);
};
