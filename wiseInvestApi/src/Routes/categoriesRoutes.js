const express = require('express');
const router = express.Router();

const { isValidToken } = require("../Ultils/Ultils");
const categoryController = require("../Controllers/categoriesController");

// categories
// router.post("/login",  categoryController.);
router.post("/register", categoryController.registerController);
// router.post("/register", isValidToken, categoryController.registerController);
router.put("/update/:id", categoryController.updateController);
router.get("/verify/:id", categoryController.verifyUserController);

module.exports = router;