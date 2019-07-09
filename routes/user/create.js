const controllers = require('../../controllers/');

module.exports = (router) => {
  router.post('/', controllers.user.create);
};
