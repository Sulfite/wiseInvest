const { hash, isNullOrEmpty } = require("../Ultils/Ultils");
const usuarioRepositorie = require("../Repositories/usuarioRepositories");

const loginService = async (user, password) => {
  const passwordCrypto = hash(password);
  const db = await usuarioRepositorie.loginRepository(user);

  if (isNullOrEmpty(db))
    throw '9002.Usuario ou senha Inválidos';

  if (db.Password_User === passwordCrypto)
    return true;
  else 
    throw '9002.Usuario ou senha Inválidos';
}

const registerService = async (data) => {

  // Usar funcao de anti injecton
  // Usar função de validacao de json
  
  const passwordCrypto = hash(data.password);
  const newUser = { 
    Name_user: data.username,
    Email_user: data.emailUser,
    Password_user: passwordCrypto,
    ID_Access_Type: 4
  };

  try {
    const db = await usuarioRepositorie.registerRepository(newUser);

    if(db.length === 0) {
      const exception = new Error('Not insert.');
      exception.code = 500;
      throw exception;
    }

    return {"id": db[1]};
  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

const updateSevice = async (id, data) => {
  // Fazer requisição para verificar se o usuario existe

  let exists = await verifyUserService(id);

  try {

    if (exists === false) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    let { nameUser,
          emailUser,
          passwordUser,
          dtBirth,
          nationalIdentifier,
          typePerson,
          idAccessType } = data
    
    if (!isNullOrEmpty(passwordUser)) {
      passwordUser = hash(passwordUser);
    }
    
    // if ((typePerson !== 'F') || (typePerson !== 'J')) {
    //   const exception = new Error('Check the parameters sent. typePerson 1');
    //   exception.code = 422;
    //   throw exception;
    // }

    const newData = {
      nameUser,
      emailUser,
      passwordUser,
      dtBirth,
      nationalIdentifier,
      typePerson,
      idAccessType
    }

    const db = await usuarioRepositorie.updateRepository(id, newData);

    if(isNullOrEmpty(db.length)) {
      const exception = new Error('Not insert');
      exception.code = 500;
      throw exception;
    }

    return db;
    
  } catch (error) {
    const message = {"title": error.name, "Message:": error.message }
    return message;
  }
}

const verifyUserService = async (id) => {
  const db = await usuarioRepositorie.VerifyUserRepository(id);

  if (db.length > 0)
    return true;
  else 
    return false;
}

const deleteUserService = async (id) => {

  try {
    
    const verify = await verifyUserService(id);
    
    if (!verify) {
      const exception = new Error('Id not found.');
      exception.code = 404;
      throw exception;
    }

    const db = await usuarioRepositorie.deleteRepository(id);

    if(isNullOrEmpty(db.length)) {
      const exception = new Error('Not delete');
      exception.code = 500;
      throw exception;
    }

    return db;

  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

const getUsersPaginationService = async (data) => {
  const {offset, limit } = data;

  if (isNullOrEmpty(offset) || typeof(offset) != "number") {
    const exception = new Error('Check the sent offset parameter.');
    exception.code = 422;
    throw exception;
  }

  if (isNullOrEmpty(limit) || typeof(limit) != "number") {
    const exception = new Error('Check the sent limit parameter.');
    exception.code = 422;
    throw exception;
  }
  
  try {
    const db = await usuarioRepositorie.getUsersPagination(offset, limit);

    if (db.length === 0) {
      const exception = new Error('Users not found.');
      exception.code = 404;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

module.exports = {
  loginService,
  registerService,
  updateSevice,
  verifyUserService,
  deleteUserService,
  getUsersPaginationService
}