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

// Stocks Wallet Recommendation
const listStocksWalletsRepository = async (idUser) => {
  try {
    let result = await db.query(`SELECT *
                                FROM dbo.Wallet
                                WHERE ID_User = ${idUser};`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const registerStocksWalletRepository = async (data) => {
  try {
    let result = await db.query("INSERT INTO dbo.Wallet(Name_wallet, Description_Wallet, ID_User) VALUES (?,?,?)", [data.Name_wallet, data.Description_Wallet, data.ID_User]);
    result = result[0];
    return [result["affectedRows"], result["insertId"]];
  } catch (error) {
    return error;
  }
}

const updateStocksWalletRepository = async (id, data) => {
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

const detailsStocksWalletRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Wallet
                                   WHERE ID_Wallet = ${id}`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteStocksWalletRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Wallet 
                                   WHERE ID_Wallet = ${id}`);
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

  listStocksWalletsRepository,
  registerStocksWalletRepository,
  updateStocksWalletRepository,
  detailsStocksWalletRepository,
  deleteStocksWalletRepository,
}