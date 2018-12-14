require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const {UserModel, IdeaModel} = require('./schema') 



const radioShow = new IdeaModel({
    title: "Kid Talk",
    description:"Radio show focused on topics that are kid friendly"
})
const prettyGirlsLLC = new IdeaModel({
    title: "Pretty Bowtique",
    description:"Hair bow and fashionline that promotes positive images for young girls"
})
const Zion = new UserModel({
    userName:"Shugga Baby",
    password:"blueprincess",
    ideas:[radioShow,prettyGirlsLLC]
})


UserModel.remove({})
  .then(() => Zion.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())