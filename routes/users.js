const express = require('express')
const { UserModel } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  UserModel.find().then(users => {
    res.json(users)
  })
  .catch((err) => console.log(err))
})

//show route
router.get('/:id', (req, res) => {
  
  UsersModel.findById(req.params.id)
  .then((users)=>{
   res.send(users)
 }) 
})

  //create route
  router.post('/', (req,res)=>{
    const newUser = new UsersModel(req.body)
    newUser.save().then((users)=>{
        res.send(users)
    })
})

//update route
router.put('/:id', async (req,res)=>{
  const userId = req.params.id
  const updatedUser = req.body
  const savedUser = await UsersModel.findByIdAndUpdate(userId, updatedUser)
  res.send(savedUser)

})

//delete route
router.delete('/:id', (req,res)=>{
  const userId = req.params.id
  console.log(userId)
  // res.send('a string or whatever')
   UsersModel.findByIdAndRemove(userId).then(()=>{
      res.send({msg: 'user deleted'})
   })
 .catch((err)=>{
   console.log(err)
 })
})

module.exports = router