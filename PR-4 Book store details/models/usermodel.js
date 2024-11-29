const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    book_name : {
        type : String,
        required : true,
    },
    book_price : {
        type : String,
        required : true,
    },
    book_pages: {
        type : Array,
        required : true,
    },
    book_author: {
        type : String,
        required : true,
    },
})

 const user = mongoose.model('user',userSchema);
 module.exports = user;