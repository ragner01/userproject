cont mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    Image: {
        type:String,
        required: true
    },
    isAdmin: {
        type:string,
        required: true
    },
    username: {
        type: Boolean,
        required: false
    },
    password: {
        type: String,
        required: false
    },

})

const userModel = mongoose.model(`user`,userSchema)
module.exports = userModel