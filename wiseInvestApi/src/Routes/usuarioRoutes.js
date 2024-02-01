const express = require("express");
const router = express.Router();

const { isValidToken } = require("../Ultils/Ultils");
const usuarioController = require("../Controllers/usuarioController");

// Usuarios
router.post('/login',  usuarioController.loginController);
router.post('/register', usuarioController.registerController);
// router.post('/register', isValidToken, usuarioController.registerController);
router.put('/update/:id', usuarioController.updateController);
router.get('/verify/:id', usuarioController.verifyUserController);
router.delete('/delete/:id', usuarioController.deleteUserController);
router.get('/getUsers/:offset/:limit', usuarioController.getUsersPaginationControler);
// router.get('/filterUsers', usuarioController.filterUsersControler);

module.exports = router;