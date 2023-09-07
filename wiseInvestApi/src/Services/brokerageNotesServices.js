const { isNullOrEmpty } = require("../Ultils/Ultils");
const brokerageNotesRepositorie = require("../Repositories/brokerageNotesRepositories");

const listAllBnUserService = async (idUser) => {
  try {
    const db = await brokerageNotesRepositorie.listAllBnUserRepository(idUser);
  
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

const listsAllBnUserWalletService = async (idUser, idWallet) => {
  try {
    const db = await brokerageNotesRepositorie.listsAllBnUserWalletRepository(idUser, idWallet);
  
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

const registerBnService = async (data) => {
  // Usar funcao de anti injecton
  // Usar função de validacao de json
  
  const newBn = { 
    CD_Stocks: data.cdStocks,
    Price: data.price,
    Amount: data.amount,
    DT_Purchase: data.dtPurchase,
    DT_Sale: data.dtSale,
    ID_User: data.idUser,
    ID_Investment_Brokerage: data.idInvestmentBrokerage,
    ID_Wallet: data.idWallet,
    ID_Category: data.idCategory,
    ID_Subcategor: data.idSubcategory
  };

  try {
    const db = await brokerageNotesRepositorie.registerBnRepository(newBn);

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

const updateBnSevice = async (id, data) => {
  // Fazer requisição para verificar se o usuario existe

  try {

    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    const { cdStocks,
            price,
            amount,
            dtPurchase,
            dtSale,
            idInvestmentBrokerage,
            idWallet,
            idCategory,
            idSubcategory } = data

    const updateBn = { 
      CD_Stocks: cdStocks,
      Price: price,
      Amount: amount,
      DT_Purchase: dtPurchase,
      DT_Sale: dtSale,
      ID_User: idUser,
      ID_Investment_Brokerage: idInvestmentBrokerage,
      ID_Wallet: idWallet,
      ID_Category: idCategory,
      ID_Subcategor: idSubcategory
    };


    const db = await brokerageNotesRepositorie.updateBnRepository(id, updateBn);

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

const detailsBnService = async (id) => {

  try {
    const db = await brokerageNotesRepositorie.detailsBnRepository(id);

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

const deleteBnService = async (id) => {

  try {
    const db = await brokerageNotesRepositorie.deleteBnRepository(id);

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
  listAllBnUserService,
  listsAllBnUserWalletService,
  registerBnService,
  updateBnSevice,
  detailsBnService,
  deleteBnService
}