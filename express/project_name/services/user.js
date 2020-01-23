const User = require('../models/user')
const Subscription = require('../models/subscription')

module.exports.getAllUers = function () {
  return User.list()
}

module.exports.addNewUser = (firstName, lastName, age) => {
  return User.insert(firstName, lastName, age)
}

module.exports.getUserById = function (userId) {
  return User.getOneById(userId)
}

module.exports.createSubscription = function (userId) {
  const user = User.getOneById(userId)
  if (!user) {
    throw new Error("No such user!")
  }
  const sub = Subscription.insert(userId, url)
  return sub
}