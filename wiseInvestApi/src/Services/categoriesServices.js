const { isNullOrEmpty } = require("../Ultils/Ultils");
const categoriesRepositorie = require("../Repositories/categoriesRepositories");

const listCategoriesService = async () => {
  
  const db = await categoriesRepositorie.listCategoriesRepository();

  if (isNullOrEmpty(db))
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
    const db = await categoriesRepositorie.registerRepository(newUser);

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

    const db = await categoriesRepositorie.updateRepository(id, newData);

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
  const db = await categoriesRepositorie.VerifyUserRepository(id);

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