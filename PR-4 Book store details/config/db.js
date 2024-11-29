const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/connection`);
const databage = mongoose.connection;
databage.on("connected",(err)=>{
    if (err) {
        console.log(err);
        return false;
    } 
    console.log(`db is connect`);
})

module.exports = databage