const { Router } = require("express");
const router = Router();

const { getTravels, createTravels, getTravel } = require("../controllers/travels.controller");

router.route("/")
    .get(getTravels)
    .post(createTravels);

router.route("/:name")
    .get(getTravel)

module.exports = router;