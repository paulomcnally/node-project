const userCreate = require('./user/create');
const userList = require('./user/list');
const userLogin = require('./user/login');

module.exports.user = {
  create: userCreate,
  list: userList,
  login: userLogin,
};