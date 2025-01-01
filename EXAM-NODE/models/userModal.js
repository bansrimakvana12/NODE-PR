const mongoose = require('mongoose')


const userschama = mongoose.Schema({
    p_name: {
        type: String,
        require: true
    },
    p_email: {
        type: String,
        require: true
    },
    p_password: {
        type: String,
        require: true
    },

})

const User = mongoose.model('user', userschama)

module.exports = User;