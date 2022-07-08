const mongoose = require('mongoose');


const connectionString = "mongodb+srv://dridre:r.b.n.-12@cluster0.tabd1i1.mongodb.net/db?retryWrites=true&w=majority"

mongoose.connect(connectionString)
    .then(() => {
        console.log("Database connected")
    }).catch(err => {
        console.error(err)
    })

const Schema = new mongoose.Schema({
    name: String,
    date: Date,
})

const Web = mongoose.model("Web", Schema)

const web = new Web({
    name: "",
    date: new Date(),
})

web.save()
    .then(result => {
        console.log(result)
        mongoose.connection.close()
    }).catch(err => {
        console.error(err)
    })