const usuarioServices = require("../Services/usuarioServices");
const { isNullOrEmpty } = require('../Ultils/Ultils');

const loginController = async (req, res, next) => {
  const { user, password } = req.body;
  
  try {
    if (isNullOrEmpty(user) || isNullOrEmpty(password))
      throw '9001.Verifique os dados enviados estão preenchidos corretamente.';

    const response = await usuarioServices.loginService(user, password);
    res.status(200).send(JSON.stringify(response));
  }
  catch(error) {
    return next(error);
  }
}

const registerController = async (req, res, next) => {
 // colocar verificacoes iniciais 
  const data = req.body;

  try {
    const response = await usuarioServices.registerService(data);
    res.status(201).send(`${response}`);
  }
  catch(e) {
    return next(e);
  }
}

const updateController = async (req, res, next) => {
  const data = req.body;
  const _id = req.params.id;
  const response = await usuarioServices.updateSevice(_id, data);

  res.status(200).send(response.modifiedCount > 0 ? true : false);
}

const verifyUserController = async (req, res, next) => {

  const _id = req.params.id;

  const response = await usuarioServices.verifyUserService(_id);

  res.status(200).send(response);
}

module.exports = { 
  loginController,
  registerController,
  updateController,
  verifyUserController
};