const travelCtrl = {};
const Travel = require("../models/Travel");

travelCtrl.getTravels = async (req, res) => {
    const travels = await Travel.find();
    res.json(travels);
};

travelCtrl.createTravels = async (req, res) => {
    const { name } = req.body;
    const newTravel = new Travel({ name });
    await newTravel.save();
    res.json({ message: "Travel creado" });
}

module.exports = travelCtrl;