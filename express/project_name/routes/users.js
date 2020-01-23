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
  res.render('users')
})

router.post('/', (req, res) => {
  const { firstName, lastName, age } = req.body
  const u = UserService.addNewUser(firstName, lastName, age)
  res.json(u)
})

router.get('/:userId', (req, res) => {
  console.log(req.params.userId)
  const user = UserService.getUserById(Number(req.params.userId))
  res.locals.user = user
  res.render('user')
})

router.post("/:userId/subscription", (req, res) => {
  try {
    const sub = UserService.createSubscription(Number(req.params.userId, req.body.url))
    res.json(sub)
  } catch(e) {
    next(e)
  }
})

module.exports = router
