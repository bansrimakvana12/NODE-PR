const mongoose = require('mongoose');

const subcatagorySchema = mongoose.Schema({
    catagoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "catagoryuser",
    },
    subcatagory :{
        type : String,
        required : true
    },
   status : {
    type : String,
    default : "deactive",
   }
})
const subcatagoryuser = mongoose.model('subcatagoryuser',subcatagorySchema);

module.exports = subcatagoryuser;