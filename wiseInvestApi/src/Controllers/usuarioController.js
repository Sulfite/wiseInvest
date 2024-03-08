const usuarioServices = require('../Services/usuarioServices');
const { isNullOrEmpty } = require('../Ultils/Ultils');

const loginController = async (req, res, next) => {
  const { user, password } = req.body;
  
  try {
    if (isNullOrEmpty(user) || isNullOrEmpty(password)) {
      const exception = new Error('9001.Verifique os dados enviados estão preenchidos corretamente.');
      exception.code = 401;
      throw exception;
    }

    const response = await usuarioServices.loginService(user, password);
    res.status(200).send(JSON.stringify(response));
  }
  catch(e) {
    let message = {"title": e.name, "Message": e.message }
    return res.status(e.code).send(JSON.stringify(message));
  }
}

const registerController = async (req, res, next) => {
 // colocar verificacoes iniciais 
  const data = req.body;

  try {
    const response = await usuarioServices.registerService(data);

    if (response.code > 0 && response.title === 'Error') {  
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    res.status(201).send(`${JSON.stringify(response)}`);
  }
  catch(e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(500).send(`${JSON.stringify(message)}`);
  }
}

const updateController = async (req, res, next) => {
  const data = req.body;
  const _id = req.headers['x-access-token'];

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await usuarioServices.updateSevice(_id, data);

    res.status(200).send(response);

  } catch (e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}


const updatePlanController = async (req, res, next) => {
  const data = req.body;
  const _id = req.headers['x-access-token'];

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await usuarioServices.updatePlanSevice(_id, data);

    res.status(200).send(response);

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
    const message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const deleteUserController = async (req, res, next) => {
  const _id = req.params.id;
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422
      throw exception;
    }

    const response = await usuarioServices.deleteUserService(_id);
    if (response.code > 0 && response.title === 'Error') {
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    if (response[0] === 1)
      res.status(200).send(true);
    
  } catch (e) {
    const message = {"title": e.name, "Message": e.message };
    return res.status(e.code).send(JSON.stringify(message));
  }
}

const getUserControler = async (req, res, next) => {
  const _id = req.headers['x-access-token'];
  try {
    const response = await usuarioServices.getUserService(_id);
    
    if (response.code > 0 && response.title === 'Error') {
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    res.status(200).send(response);
  } catch (e) {
    const message = {"title": e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const getUsersPaginationControler = async (req, res, next) => {
  const _offset = req.params.offset;
  const _limit = req.params.limit;
  const data = {
    offset: Number(_offset),
    limit: Number(_limit)
  };
  try {
    const response = await usuarioServices.getUsersPaginationService(data);
    
    if (response.code > 0 && response.title === 'Error') {
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    res.status(200).send(response);
    
  } catch (e) {
    const message = {"title": e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const filterUsersControler = async (req, res, next) => {
  
  const data = req.body;
  try {

    const response = await usuarioServices.filterUsersService(data);
    
    // if (response.code > 0 && response.title === 'Error') {
    //   const exception = new Error(response.message);
    //   exception.code = response.code;
    //   throw exception;
    // }

    res.status(200).send(response);
    
  } catch (e) {
    const message = {"title": e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

module.exports = { 
  loginController,
  registerController,
  updateController,
  verifyUserController,
  deleteUserController,
  getUserControler,
  getUsersPaginationControler,
  filterUsersControler,
  updatePlanController
};