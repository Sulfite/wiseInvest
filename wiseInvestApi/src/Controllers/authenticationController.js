const authenticationService = require("../Services/authenticationService");
const { isNullOrEmpty } = require("../Ultils/Ultils");

const jwt = require('jsonwebtoken');
require('dotenv').config({path: __dirname + '/.env'})

const authenticationController = async (req, res, next) => {
  const { user, password } = req.body;
  
  try {
    if (isNullOrEmpty(user) || isNullOrEmpty(password))
      throw '9000.Verifique os dados enviados estão preenchidos corretamente.';

    const response = await authenticationService.authenticationService(user, password);
    res.status(200).send(JSON.stringify(response));
  }
  catch(error) {

	// res.status(500).json({message: 'Login inválido!'});
    return next(error);
  }
}
module.exports = { 
  authenticationController
};