const express = require("express");
const router = express.Router();

const authenticationControler = require("../Controllers/authenticationController")

router.post("/authentication", authenticationControler.authenticationController);

module.exports = router;