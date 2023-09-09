const { isNullOrEmpty } = require("../Ultils/Ultils");
const walletRepositorie = require("../Repositories/walletRepositories");
const { listsAllBnUserWalletService } = require("./brokerageNotesServices");

const listWalletsService = async (idUser) => {
  try {
    const db = await walletRepositorie.listWalletsRepository(idUser);

    if (db.length === 0) {
      const exception = new Error("Not selected.");
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {
      code: error.code,
      title: error.name,
      message: error.message,
    };
    return message;
  }
};

const registerWalletService = async (data) => {
  // Usar funcao de anti injecton
  // Usar função de validacao de json

  const newWallet = {
    Name_wallet: data.walletName,
    Description_Wallet: data.walletDescription,
    ID_User: data.idUser,
  };

  try {
    const db = await walletRepositorie.registerWalletRepository(newWallet);

    if (db.length === 0) {
      const exception = new Error("Not insert.");
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {
      code: error.code,
      title: error.name,
      message: error.message,
    };
    return message;
  }
};

const updateWalletSevice = async (id, data) => {
  // Fazer requisição para verificar se o usuario existe

  try {
    if (isNullOrEmpty(data)) {
      const exception = new Error(
        "9003.Não foi encontrado usuário para ser alterados."
      );
      exception.code = 404;
      throw exception;
    }

    const { walletName, walletDescription } = data;

    const updateWallet = {
      Name_Wallet: walletName,
      Description_Wallet: walletDescription,
    };

    const db = await walletRepositorie.updateWalletRepository(id, updateWallet);

    if (db.length === 0) {
      const exception = new Error("Not updated.");
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = { title: error.name, "Message:": error.message };
    return message;
  }
};

const detailsWalletService = async (id) => {
  try {
    const db = await walletRepositorie.detailsWalletRepository(id);

    if (db.length === 0) {
      const exception = new Error("Not delete");
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {
      code: error.code,
      title: error.name,
      message: error.message,
    };
    return message;
  }
};

const deleteWalletService = async (id) => {
  try {
    const db = await walletRepositorie.deleteWalletRepository(id);

    if (db.length === 0) {
      const exception = new Error("Not delete");
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {
      code: error.code,
      title: error.name,
      message: error.message,
    };
    return message;
  }
};

const verifyConsolidateWalletService = async (idUser, idWallet) => {
  try {
    const db = await walletRepositorie.verifyConsolidateWalletRepository(idUser, idWallet);

    if (db[0]["1"] === 1)
      return true;
    else 
      return false;

  } catch (error) {
     const message = {
      code: error.code,
      title: error.name,
      message: error.message,
    };
    return message;
  }
}

const consolidateWalletService = async (idUser, idWallet) => {
  try {    
    
    const verify = verifyConsolidateWalletService(idUser, idWallet);

    if (verify) {
      const isDelete = deleteConsolidatedWalletService(idUser, idWallet);

      if (!isDelete) {
        const exception = new Error('Not delete consolidate Wallet');
        exception.code = 500;
        throw exception;
      }
    }

    const getBn = await listsAllBnUserWalletService(idUser, idWallet);
    const insertConsolidateWallet = await walletRepositorie.createConsolidateWalletRepository(idUser, idWallet);

    if (insertConsolidateWallet[0] !== 1) {
      const exception = new Error('Not create consolidate Wallet');
      exception.code = 500;
      throw exception;
    }

    let newArrayStocksUnique = [...new Set(getBn.map((x) => x.CD_Stocks))];

    for (let i = 0; i < newArrayStocksUnique.length; i++) {
      const element = newArrayStocksUnique[i];

      let totalAmount = getBn.reduce((total, elemento) => {
        if (elemento.CD_Stocks === element) {
          if (elemento.DT_Sale === null) {
            return (total += parseFloat(elemento.Amount));
          } else return (total += 0);
        } else return total;
      }, 0);

      let totalPrice = getBn.reduce((total, elemento) => {
        if (elemento.CD_Stocks === element) {
          if (elemento.DT_Sale === null) {
            return (total +=
              parseFloat(elemento.Price) * parseFloat(elemento.Amount));
          } else return (total += 0);
        } else return total;
      }, 0);

      let averagePrice = totalPrice / totalAmount;

      let newStockdata = {
        CD_Stocks: element,
        Average_Price: averagePrice, 
        Total_Amount: totalAmount,
        ID_Wallet_Consolidated: insertConsolidateWallet[1]
      };

      let db = await walletRepositorie.createStocksConsolidateWalletRepository(newStockdata);

      if (db.length === 0) {
        const exception = new Error('Not create Stock consolidate Wallet');
        exception.code = 500;
        throw exception;
      }
    }

    return true;

  } catch (error) {
    const message = {
      code: error.code,
      title: error.name,
      message: error.message,
    };
    return message;
  }
};

const getConsolidatedWalletService = async (idUser, idWallet) => {
  try {
    const db = walletRepositorie.getConsolidatedWalletRepository(
      idUser,
      idWallet
    );

    if (db.length === 0) {
      const exception = new Error("Not selected.");
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {
      code: error.code,
      title: error.name,
      message: error.message,
    };
    return message;
  }
};

const deleteConsolidatedWalletService = async (idUser, idWallet) => {
  try {
    const db = await walletRepositorie.deleteConsolidatedWalletRepository(idUser, idWallet);

    if (db.length === 0) {
      const exception = new Error("Not delete");
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {
      code: error.code,
      title: error.name,
      message: error.message,
    };
    return message;
  }
}

module.exports = {
  listWalletsService,
  registerWalletService,
  updateWalletSevice,
  detailsWalletService,
  deleteWalletService,
  consolidateWalletService,
  getConsolidatedWalletService,
  verifyConsolidateWalletService,
  deleteConsolidatedWalletService
};
