const mongoose = require('mongoose');

const exsubcatagorySchema = mongoose.Schema({
    catagoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "catagoryuser",
    },
    subcatagoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcatagoryuser"
    },
    exsubcatagory: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "deactive",
    }
})
const exsubcatagoryuser = mongoose.model('exsubcatagoryuser', exsubcatagorySchema);

module.exports = exsubcatagoryuser;