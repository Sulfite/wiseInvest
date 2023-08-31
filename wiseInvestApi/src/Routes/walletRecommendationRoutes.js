const express = require("express");
const router = express.Router();

const { isValidToken } = require("../Ultils/Ultils");
const walletRecommendationController = require("../Controllers/walletRecommendationController");

// Wallet Recomendation
router.post('/registerWallet', walletRecommendationController.registerWalletController);
router.put('/updateWallet/:id', walletRecommendationController.updateWalletController);
router.get('/listWallets/:id',  walletRecommendationController.listWalletsController);
router.get('/detailsWallet/:id', walletRecommendationController.detailsWalletController);
router.delete('/deleteWallet/:id', walletRecommendationController.deleteWalletController);

// Stocks_Wallet_Recommendation
router.post('/addStocksWallet', walletRecommendationController.registerStocksWalletController);
router.put('/updateStocksWallet/:id', walletRecommendationController.updateStocksWalletController);
router.get('/listStocksWallets/:id',  walletRecommendationController.listStocksWalletsController);
router.get('/detailsStocksWallet/:id', walletRecommendationController.deleteStocksWalletController);
router.delete('/deleteStocksWallet/:id', walletRecommendationController.deleteStocksWalletController);

module.exports = router;