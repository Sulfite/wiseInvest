const express = require("express");
const router = express.Router();

const { isValidToken } = require("../Ultils/Ultils");
const investmentBrokerageController = require("../Controllers/investmentBrokerageController");

// Usuarios
router.post('/register', investmentBrokerageController.registerIBController);
router.put('/update/:id', investmentBrokerageController.updateIBController);
router.get('/list',  investmentBrokerageController.listIBController);
router.get('/details/:id', investmentBrokerageController.detailsIBController);
router.delete('/delete/:id', investmentBrokerageController.deleteIBController);

module.exports = router;