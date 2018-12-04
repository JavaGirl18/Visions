var express = require('express');

const router = express.Router({ mergeParams: true })
const { UserModel } = require('../db/schema')


const { IdeaModel  } = require('../db/schema.js')
//get route
router.get('/', function (req, res, next) {
    UserModel.findById(req.params.userId).then((user) => {
        res.send(user.ideas)
    })
});

//show route
router.get('/:id', async (req, res) => {
    UserModel.findById(req.params.userId)
        .then((user) => {
            const idea = user.ideas.id(req.params.id)
            res.send(idea)
        })
})

//create route
router.post('/', (req, res) => {
    UserModel.findById(req.params.userId).then((user) => {
        const newIdea = new IdeaModel(req.body)
console.log(user)
        user.ideas.push(newIdea)
        user.save().then((user)=>{
            res.send(user.ideas)
        })
    })

})



//update route
router.put('/:id', async (req, res) => {
    UserModel.findById(req.params.userId).then((user) => {
        console.log(user)
        const updatedIdea = user.ideas.id(req.params.id)
        updatedIdea.ideaName = req.body.title
        updatedIdea.description = req.body.description
        updatedIdea.image = req.body.image
        return user.save().then((updatedIdea) => {
            res.send(updatedIdea)
        })

    })

})


//delete route
router.delete('/:id',(req, res) => {
    UserModel.findById(req.params.userId).then((user) => {

        const idea = user.ideas.id(req.params.id)
        idea.remove()
        return user.save()
    })
        .then((user) => {
            res.send(user)
                .catch(err => console.log((err)))
        })
})

module.exports = router;