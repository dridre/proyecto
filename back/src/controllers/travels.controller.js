const travelCtrl = {};
const Travel = require("../models/Travel");

travelCtrl.getTravels = async (req, res) => {
    const travels = await Travel.find();
    res.json(travels);
};

travelCtrl.createTravels = async (req, res) => {
    const { name, cars } = req.body;
    const newTravel = new Travel({ name, cars });
    await newTravel.save();
    res.json({ message: "Travel creado" });
}

travelCtrl.getTravel = async (req, res) => {
    const travel = await Travel.find({name: req.params.name});
    res.json(travel)
}

travelCtrl.updateTravel = async (req, res) => {
    const {name, cars} = req.body;
    await Travel.findOneAndUpdate({name: req.params.name}, {
        name,
        cars
    });
    res.json({message: "Nota actualizada"})
    }


module.exports = travelCtrl;