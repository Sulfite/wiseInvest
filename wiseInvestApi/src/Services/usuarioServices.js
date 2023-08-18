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

    if(db["affectedRows"] === 0) {
      throw new Error("Not insert");
    }

    return db;
  } catch (error) {
    return error  
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

    // console.log(typeof(typePerson));
    
    // if ((typePerson !== 'F') || (typePerson !== 'J')) {
    //   console.log('teste');
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
    let message = {"title": error.name, "Message:": error.message }
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

module.exports = {
  loginService,
  registerService,
  updateSevice,
  verifyUserService
}