const db = require('../db/dbMySql');

const listWalletsRepository = async (idUser) => {
  try {
    let result = await db.query(`SELECT *
                                FROM dbo.Wallet_Recommendation
                                WHERE ID_User = ${idUser};`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const registerWalletRepository = async (data) => {
  try {
    let result = await db.query("INSERT INTO dbo.Wallet_Recommendation(Name_Recommendation, Description_Recommendation, ID_User) VALUES (?,?,?)", [data.Name_Recommendation, data.Description_Recommendation, data.ID_User]);
    result = result[0];
    return [result["affectedRows"], result["insertId"]];
  } catch (error) {
    return error;
  }
}

const updateWalletRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE dbo.Wallet_Recommendation 
                                   SET Name_Recommendation        = ?
                                      ,Description_Recommendation = ?
                                   WHERE ID_Wallet_Recomendation = ?;`, [data.Name_Recommendation, data.Description_Recommendation, id]);

    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const detailsWalletRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Wallet_Recommendation
                                   WHERE ID_Wallet_Recomendation = ${id}`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteWalletRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Wallet_Recommendation 
                                   WHERE ID_Wallet_Recomendation = ${id};`);

    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

// Stocks Wallet Recommendation
const listStocksWalletsRepository = async (idWalletRecommendation) => {
  try {
    let result = await db.query(`SELECT *
                                 FROM dbo.Stocks_Wallet_Recommendation
                                 WHERE ID_Wallet_Recomendation = ${idWalletRecommendation};`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const registerStocksWalletRepository = async (data) => {
  try {
    const result = await db.query("INSERT INTO dbo.Stocks_Wallet_Recommendation(CD_Stocks, ID_Wallet_Recomendation) VALUES (?,?)", [data.CD_Stocks, data.ID_Wallet_Recomendation]);

    return [result[0]["affectedRows"], result[0]["insertId"]];
  } catch (error) {
    return error;
  }
}

const updateStocksWalletRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE dbo.Stocks_Wallet_Recommendation 
                                   SET CD_Stocks               = ?
                                      ,ID_Wallet_Recomendation = ?
                                   WHERE ID_Stocks_Wallet_Recommendation = ?;`, [data.CD_Stocks, data.ID_Wallet_Recomendation, id]);

    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const detailsStocksWalletRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Stocks_Wallet_Recommendation
                                   WHERE ID_Stocks_Wallet_Recommendation = ${id}`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteStocksWalletRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Stocks_Wallet_Recommendation 
                                   WHERE ID_Stocks_Wallet_Recommendation = ${id}`);
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