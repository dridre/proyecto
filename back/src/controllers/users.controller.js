const userCtrl = {};
const User = require("../models/User")


userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUsers = async (req, res) => {
    const { name, password, email } = req.body;
    const newUser = new User({ name, password, email });
    await newUser.save();
    res.json({ message: "Usuario creado" });
}

userCtrl.updateUsers = (req, res) => res.json({ message: "PUT ID request" });

userCtrl.deleteUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Usuario eliminado" });
}

module.exports = userCtrl;

