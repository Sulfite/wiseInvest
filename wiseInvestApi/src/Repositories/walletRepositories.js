const db = require('../db/dbMySql');

const listWalletsRepository = async (idUser) => {
  try {
    let result = await db.query(`SELECT *
                                FROM dbo.Wallet
                                WHERE ID_User = ${idUser};`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const registerWalletRepository = async (data) => {

  try {
    let result = await db.query("INSERT INTO dbo.Wallet(Name_wallet, Description_Wallet, ID_User) VALUES (?,?,?)", [data.Name_wallet, data.Description_Wallet, data.ID_User]);
    result = result[0];
    return [result["affectedRows"], result["insertId"]];
  } catch (error) {
    return error;
  }
}

const updateWalletRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE dbo.Wallet 
                                   SET Name_wallet        = ?
                                      ,Description_Wallet = ?
                                   WHERE ID_Wallet = ?;`, [data.Name_Wallet, data.Description_Wallet, id]);

    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const detailsWalletRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Wallet
                                   WHERE ID_Wallet = ${id}`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteWalletRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Wallet 
                                   WHERE ID_Wallet = ${id}`);
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const verifyConsolidateWalletRepository = async (idUser, idWallet) => {
  try {
    const result = await db.query(`SELECT 1
                                   FROM dbo.Wallet_Consolidated
                                   WHERE ID_User = ${idUser}
                                     AND ID_Wallet = ${idWallet}`);

    return result[0];
  } catch (error) {
    return error;
  }
}

const createConsolidateWalletRepository = async (idUser, idWallet) => {
  try {
    const result = await db.query("INSERT INTO dbo.Wallet_Consolidated(DT_Consolidated, ID_User, ID_Wallet) VALUES (?,?,?)", 
                                 [new Date(), idUser, idWallet]);
    
    return [result[0]["affectedRows"], result[0]["insertId"]];
  } catch (error) {
    return error;
  }
}

const createStocksConsolidateWalletRepository = async (data) => {
  try {
    const result = await db.query("INSERT INTO dbo.Stocks_Wallet_Consolidated(CD_Stocks, Average_Price, Total_Amount, ID_Wallet_Consolidated) VALUES (?,?,?,?)", 
                                 [data.CD_Stocks, data.Average_Price, data.Total_Amount, data.ID_Wallet_Consolidated]);
    
    return [result[0]["affectedRows"], result[0]["insertId"]];
  } catch (error) {
    return error;
  }
}

const getConsolidatedWalletRepository = async (idUser, idWallet) => {
  try {
    const result = await db.query(`SELECT Stocks_Wallet_Consolidated.CD_Stocks, 
                                          Stocks_Wallet_Consolidated.Average_Price,
                                          Stocks_Wallet_Consolidated.Total_Amount
                                   FROM dbo.Wallet_Consolidated
                                        INNER JOIN Stocks_Wallet_Consolidated
                                        ON Stocks_Wallet_Consolidated.ID_Wallet_Consolidated = Wallet_Consolidated.ID_Wallet_Consolidated
                                   WHERE Wallet_Consolidated.ID_User   = ${idUser}
                                     AND Wallet_Consolidated.ID_Wallet = ${idWallet};`);
                                 
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteConsolidatedWalletRepository = async (idUser, idWallet) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Wallet_Consolidated 
                                   WHERE Wallet_Consolidated.ID_User   = ${idUser}
                                     AND Wallet_Consolidated.ID_Wallet = ${idWallet};`);
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

module.exports= {
  listWalletsRepository,
  registerWalletRepository,
  updateWalletRepository,
  detailsWalletRepository,
  deleteWalletRepository,
  createConsolidateWalletRepository,
  createStocksConsolidateWalletRepository,
  getConsolidatedWalletRepository,
  verifyConsolidateWalletRepository,
  deleteConsolidatedWalletRepository
}