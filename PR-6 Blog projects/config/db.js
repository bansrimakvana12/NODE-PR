const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cookie-auth-2pm');

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`DB is connected`);
    
})
module.exports = db;