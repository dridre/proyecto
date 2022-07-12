const { Schema, model } = require("mongoose");


const travelSchema = new Schema({
    name: String,
    cars: {
        number: Number,
        people: []
    }
}, {
    timestamps: true
});

module.exports = model("Travel", travelSchema);