const config = require('../config/config');

module.exports = (req, res, next) => {
  if (req.path === '/user/login') {
    next();
  } else if (req.headers.authorization === config.auth.token) {
    next();
  } else {
    res.json({
      error: 'Unautorized',
      code: 401,
    });
  }
};
