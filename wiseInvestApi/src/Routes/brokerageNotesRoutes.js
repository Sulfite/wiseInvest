const express = require("express");
const router = express.Router();

const { isValidToken } = require("../Ultils/Ultils");
const brokerageNotesController = require("../Controllers/brokerageNotesController");

// Usuarios
router.post('/register', brokerageNotesController.registerBnController);
router.put('/update/:id', brokerageNotesController.updateBnController);
router.get('/lists/:id',  brokerageNotesController.listsAllBnUserController);
router.get('/lists/:idUser/:idWallet',  brokerageNotesController.listsAllBnUserWalletController);
router.get('/details/:id', brokerageNotesController.detailsBnController);
router.delete('/delete/:id', brokerageNotesController.deleteBnController);

module.exports = router;