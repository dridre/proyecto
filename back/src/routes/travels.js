const { Router } = require("express");
const router = Router();

const { getTravels, createTravels, getTravel, updateTravel } = require("../controllers/travels.controller");

router.route("/")
    .get(getTravels)
    .post(createTravels);

router.route("/:name")
    .get(getTravel)
    .put(updateTravel);

module.exports = router;