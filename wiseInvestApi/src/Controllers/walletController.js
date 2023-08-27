const walletServices = require("../Services/walletServices");
const { isNullOrEmpty } = require('../Ultils/Ultils');

const db = require('../db/dbMySql');

const listWalletsController = async (req, res, next) => {
  const _idUser = req.params.id;

  try {
    const response = await walletServices.listWalletsService(_idUser);

    if (response.code > 0 && response.title === 'Error') {  
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    // res.status(200).send(JSON.stringify(response));
    res.status(200).send(response);
  }
  catch(e) {
    const message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(JSON.stringify(message));
    // return res.status(500).send(JSON.stringify(message));
  }
}

const registerWalletController = async (req, res, next) => {
 // colocar verificacoes iniciais 
  const data = req.body;

  try {
    const response = await walletServices.registerWalletService(data);

    if (response.code > 0 && response.title === 'Error') {  
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    res.status(201).send(JSON.stringify(response));
  }
  catch(e) {
    const message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(JSON.stringify(message));
  }
}

const updateWalletController = async (req, res, next) => {
  const data = req.body;
  const _id = req.params.id;
  
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await walletServices.updateWalletSevice(_id, data);

    res.status(200).send(response);

  } catch (e) {
    const message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(JSON.stringify(message));
  }
}

const detailsWalletController = async (req, res, next) => {

  const _id = req.params.id;

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await walletServices.detailsWalletService(_id);
    res.status(200).send(response);

  } catch (e) {
    const message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const deleteWalletController = async (req, res, next) => {
  const _id = req.params.id;
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422
      throw exception;
    }

    const response = await walletServices.deleteWalletService(_id);
    if (response.code > 0 && response.title === 'Error') {
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    if (response[0] === 1)
      return res.status(200).send(true);
    
  } catch (e) {
    const message = {"title": e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

module.exports = { 
  listWalletsController,
  registerWalletController,
  updateWalletController,
  detailsWalletController,
  deleteWalletController
};