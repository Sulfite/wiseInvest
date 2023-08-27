const express = require("express");
const router = express.Router();

const { isValidToken } = require("../Ultils/Ultils");
const walletController = require("../Controllers/walletController");

// Usuarios
router.post('/registerWallet', walletController.registerWalletController);
router.put('/updateWallet/:id', walletController.updateWalletController);
router.get('/listWallets/:id',  walletController.listWalletsController);
router.get('/detailsWallet/:id', walletController.detailsWalletController);
router.delete('/deleteWallet/:id', walletController.deleteWalletController);

module.exports = router;