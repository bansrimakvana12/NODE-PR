const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    catagoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "catagoryuser",
    },
    subcatagoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcatagoryuser"
    },
    exsubcatagoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"exsubcatagoryuser"
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String,
        require:true
    },
    status: {
        type: String,
        default: "deactive",
    }
})
const productuser = mongoose.model('productuser', productSchema);

module.exports = productuser;