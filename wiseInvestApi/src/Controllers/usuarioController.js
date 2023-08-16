const usuarioServices = require("../Services/usuarioServices");
const { isNullOrEmpty } = require('../Ultils/Ultils');

const db = require('../db/dbMySql');

const loginController = async (req, res, next) => {
  const { user, password } = req.body;
  
  try {
    if (isNullOrEmpty(user) || isNullOrEmpty(password))
      throw '9001.Verifique os dados enviados estão preenchidos corretamente.';

    const response = await usuarioServices.loginService(user, password);
    res.status(200).send(JSON.stringify(response));
  }
  catch(error) {
    return next(JSON.stringify(error));
  }
}

const registerController = async (req, res, next) => {
 // colocar verificacoes iniciais 
  const data = req.body;

  try {
    const response = await usuarioServices.registerService(data);

    if (isNullOrEmpty(response["affectedRows"]))
      throw new Error('Error when inserting a new record');

    res.status(201).send(`${JSON.stringify(response)}`);
  }
  catch(e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(500).send(`${JSON.stringify(message)}`);
  }
}

const updateController = async (req, res, next) => {
  const data = req.body;
  const _id = req.params.id;
  try {

    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await usuarioServices.updateSevice(_id, data);

    console.log(response);

    res.status(200).send(response.modifiedCount > 0 ? true : false);

  } catch (e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }

}

const verifyUserController = async (req, res, next) => {

  const _id = req.params.id;

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await usuarioServices.verifyUserService(_id);
    res.status(200).send(response);
  } catch (e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

module.exports = { 
  loginController,
  registerController,
  updateController,
  verifyUserController
};