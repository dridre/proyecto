const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : "mongodb://localhost/web";

mongoose.connect(URI)
    .then(() => {
        console.log("Database connected")
    }).catch(err => {
        console.error(err)
    })