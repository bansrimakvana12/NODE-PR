const mongoose = require('mongoose');

const catagorySchema = mongoose.Schema({
    catagory_name : {
        type : String,
        required : true,
    },
   status : {
    type : String,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    default : "deactive",
   }
})
const catagoryuser = mongoose.model('catagoryuser',catagorySchema);

module.exports = catagoryuser;