const { Schema, model } = require("mongoose");


const travelSchema = new Schema({
    name: String,
    cars: {
        number:{
            type: Number,
            default: 0
        },
        places: Number,
        people: []
    }
}, {
    timestamps: true
});

module.exports = model("Travel", travelSchema);