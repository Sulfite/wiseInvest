const { isNullOrEmpty } = require("../Ultils/Ultils");
const walletRecommendationRepositorie = require("../Repositories/walletRecommendationRepositories");

const listWalletsService = async (idUser) => {
  try {
    const db = await walletRecommendationRepositorie.listWalletsRepository(idUser);
  
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
  
  const newWalletrecommendation = { 
    Name_Recommendation: data.nameRecommendation,
    Description_Recommendation: data.descriptionRecommendation,
    ID_User: data.idUser
  };
 
  try {
    const db = await walletRecommendationRepositorie.registerWalletRepository(newWalletrecommendation);
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

    const { nameRecommendation,
            descriptionRecommendation } = data
    
    const updateWallet = { 
      Name_Recommendation: nameRecommendation,
      Description_Recommendation: descriptionRecommendation
    };

    const db = await walletRecommendationRepositorie.updateWalletRepository(id, updateWallet);
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
    const db = await walletRecommendationRepositorie.detailsWalletRepository(id);
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
    const db = await walletRecommendationRepositorie.deleteWalletRepository(id);
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

// Stocks Wallet Recommendation
const listStocksWalletsService = async (idWallet) => {
  try {
    const db = await walletRecommendationRepositorie.listStocksWalletsRepository(idWallet);
  
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

const registerStocksWalletService = async (data) => {
  // Usar funcao de anti injecton
  // Usar função de validacao de json
  
  const newStocks = { 
    CD_Stocks: data.cdStocks,
    ID_Wallet_Recomendation: data.idWalletRecomendation,
  };
 
  try {
    const db = await walletRecommendationRepositorie.registerStocksWalletRepository(newStocks);
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

const updateStocksWalletSevice = async (id, data) => {
  // Fazer requisição para verificar se o usuario existe
  try {
    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    const { cdStocks,
            idWalletRecomendation } = data
    
    const updateStocks = { 
      CD_Stocks: cdStocks,
      ID_Wallet_Recomendation: idWalletRecomendation
    };

    const db = await walletRecommendationRepositorie.updateStocksWalletRepository(id, updateStocks);
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

const detailsStocksWalletService = async (id) => {
  try {
    const db = await walletRecommendationRepositorie.detailsStocksWalletRepository(id);
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

const deleteStocksWalletService = async (id) => {
  try {
    const db = await walletRecommendationRepositorie.deleteStocksWalletRepository(id);
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
  deleteWalletService,

  listStocksWalletsService,
  registerStocksWalletService,
  updateStocksWalletSevice,
  detailsStocksWalletService,
  deleteStocksWalletService
}