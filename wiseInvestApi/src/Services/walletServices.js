const { isNullOrEmpty } = require("../Ultils/Ultils");
const walletRepositorie = require("../Repositories/walletRepositories");

const listWalletsService = async (idUser) => {
  
  try {
    const db = await walletRepositorie.listWalletsRepository(idUser);
  
    if(db.length === 0) {
      const exception = new Error('Not selected.');
      exception.code = 500;
      throw exception;
    }
  
    return db;

  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }

}

const registerWalletService = async (data) => {

  // Usar funcao de anti injecton
  // Usar função de validacao de json
  
  const newWallet = { 
    Name_wallet: data.walletName,
    Description_Wallet: data.walletDescription,
    ID_User: data.idUser
  };

  try {
    const db = await walletRepositorie.registerWalletRepository(newWallet);

    if(db.length === 0) {
      const exception = new Error('Not insert.');
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

const updateWalletSevice = async (id, data) => {
  // Fazer requisição para verificar se o usuario existe

  try {

    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    const { walletName,
            walletDescription } = data
    
    const updateWallet = { 
      Name_Wallet: walletName,
      Description_Wallet: walletDescription
    };

    const db = await walletRepositorie.updateWalletRepository(id, updateWallet);

    if(db.length === 0) {
      const exception = new Error('Not updated.');
      exception.code = 500;
      throw exception;
    }

    return db;
    
  } catch (error) {
    const message = {"title": error.name, "Message:": error.message }
    return message;
  }
}

const detailsWalletService = async (id) => {

  try {
    const db = await walletRepositorie.detailsWalletRepository(id);

    if(db.length === 0) {
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

const deleteWalletService = async (id) => {

  try {
    const db = await walletRepositorie.deleteWalletRepository(id);

    if(db.length === 0) {
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

module.exports = {
  listWalletsService,
  registerWalletService,
  updateWalletSevice,
  detailsWalletService,
  deleteWalletService
}