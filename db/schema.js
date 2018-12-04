const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IdeaSchema = new Schema({
    title: {
        type: String,
        default: "New Title"
    },
    description: {
        type: String,
        default: "New Description"
    },
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
})
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    mainImage: String,
    password:{ 
        type:String,
        required: true,
    },
    ideas: [IdeaSchema]
})
const UserModel = mongoose.model('Users', UserSchema)
const IdeaModel = mongoose.model('Ideas', IdeaSchema)

module.exports = { UserModel, IdeaModel } 