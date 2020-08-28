const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const isEmail = require('validator/lib/isEmail')

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 64,
        unique: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return isEmail(value)
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128
    },
    loginCount: {
        type: Number,
        default: 0
    }
})

userSchema.pre('save', function(next) {
    const user = this
    bcryptjs.genSalt()
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encrypt) => {
                    user.password = encrypt
                    next()
                })
        })
})

const User = mongoose.model('User', userSchema)
module.exports = User