let express = require('express');
let router = express.Router();
// const User = require('../models/user')
const UserService = require('../services/user')


/* GET home page. */
router.get('/', (req, res, next) => {
  // const user = new User(req.query.firstName, req.query.lastName, req.query.age)
  // res.locals.user = user
  const users = UserService.getAllUers()
  res.locals.users = users
  res.render('user')
})

router.post('/', (req, res) => {
  const { firstName, lastName, age } = req.body
  const u = UserService.addNewUser(firstName, lastName, age)
  res.json(u)
})

module.exports = router
