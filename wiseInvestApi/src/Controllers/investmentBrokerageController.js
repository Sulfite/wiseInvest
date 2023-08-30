const investmentBrokerageServices = require("../Services/investmentBrokerageServices");
const { isNullOrEmpty } = require('../Ultils/Ultils');

const db = require('../db/dbMySql');

const listIBController = async (req, res, next) => {
  
  try {
    const response = await investmentBrokerageServices.listIBService();

    if (response.code > 0 && response.title === 'Error') {  
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    res.status(200).send(response);
  }
  catch(e) {
    const message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(JSON.stringify(message));
  }
}

const registerIBController = async (req, res, next) => {
 // colocar verificacoes iniciais 
  const data = req.body;

  try {
    const response = await investmentBrokerageServices.registerIBService(data);

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

const updateIBController = async (req, res, next) => {
  const data = req.body;
  const _id = req.params.id;
  
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await investmentBrokerageServices.updateIBSevice(_id, data);

    res.status(200).send(response);

  } catch (e) {
    const message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(JSON.stringify(message));
  }
}

const detailsIBController = async (req, res, next) => {
  const _id = req.params.id;

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await investmentBrokerageServices.detailsIBService(_id);
    res.status(200).send(response);

  } catch (e) {
    const message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const deleteIBController = async (req, res, next) => {
  const _id = req.params.id;
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422
      throw exception;
    }

    const response = await investmentBrokerageServices.deleteIBService(_id);
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
  listIBController,
  registerIBController,
  updateIBController,
  detailsIBController,
  deleteIBController
};