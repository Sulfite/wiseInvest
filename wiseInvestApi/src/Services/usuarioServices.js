const { hash, isNullOrEmpty } = require("../Ultils/Ultils");
const usuarioRepositorie = require("../Repositories/usuarioRepositories");

const loginService = async (user, password) => {
  const passwordCrypto = hash(password);
  const db = await usuarioRepositorie.loginRepository(user, passwordCrypto);

  if (isNullOrEmpty(db))
    throw '9002.Usuario ou senha Inválidos';

  if (db.password === passwordCrypto)
    return true;
  else 
    throw '9002.Usuario ou senha Inválidos';
}

const registerService = async (data) => {

  // Usar funcao de anti injecton
  // Usar função de validacao de json
  
  const passwordCrypto = hash(data.password);
  const newUser = { 
    username: data.username,
    password: passwordCrypto
  };
  const db = await usuarioRepositorie.registerRepository(newUser);
  return `${db}`;
}

const updateSevice = async (id, data) => {
  
  // Fazer requisição para verificar se o usuario existe

  let exists = verifyUserService(id);

  if (exists === false)
  throw '9003.Não foi encontrado usuário para ser alterados.';


  if (!isNullOrEmpty(data)) {

    let { username, password } = data
    
    if (!isNullOrEmpty(password)) {
      password = hash(password);
    }
    
    const newData = {
      username,
      password
    }
    const db = await usuarioRepositorie.updateRepository(id, newData);
    
    console.log(db);
    
    return db;
  }
}

const verifyUserService = async (id) => {

  const db = await usuarioRepositorie.VerifyUserRepository(id);

  console.log(db);

  if (isNullOrEmpty(db))
    return false;
  else 
    return true;
}


module.exports = {
  loginService,
  registerService,
  updateSevice,
  verifyUserService
}