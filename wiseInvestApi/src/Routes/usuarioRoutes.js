const express = require("express");
const router = express.Router();

const { isValidToken } = require("../Ultils/Ultils");
const usuarioController = require("../Controllers/usuarioController");

// Usuarios
router.post("/login", isValidToken, usuarioController.loginController);
router.post("/register", usuarioController.registerController);
router.put("/update/:id", usuarioController.updateController);
router.get("/verify/:id", usuarioController.verifyUserController);

module.exports = router;