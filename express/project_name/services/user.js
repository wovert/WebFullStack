const User = require('../models/user')

module.exports.getAllUers = function () {
  return User.list()
}

module.exports.addNewUser = (firstName, lastName, age) => {
  return User.insert(firstName, lastName, age)
}