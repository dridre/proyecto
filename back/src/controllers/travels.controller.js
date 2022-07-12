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
    const travel = await Travel.findById(req.params.id);
    res.json(travel)
}


module.exports = travelCtrl;