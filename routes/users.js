const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')

router.get('/', function (req, res) {
  UserModel.find().then((users) => {
    res.send({
      users
    })
  })
})

module.exports = router;