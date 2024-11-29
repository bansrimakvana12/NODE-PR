const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    movie: {
        type: String,
        required: Array,
    },
    moviename: {
        type: String,
        required: true,
    },
    movieintro: {
        type: String,
        required: true,
    },
    movieprice: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
   
})

const user = mongoose.model("user", userSchema);
module.exports = user;