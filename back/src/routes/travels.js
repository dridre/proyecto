const { Router } = require("express");
const router = Router();

const { getTravels, createTravels } = require("../controllers/travels.controller");

router.route("/")
    .get(getTravels)
    .post(createTravels);


module.exports = router;