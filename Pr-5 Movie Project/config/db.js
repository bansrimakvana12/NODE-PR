const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/movie-card`);

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`DB is conected`);

})

module.exports = db;