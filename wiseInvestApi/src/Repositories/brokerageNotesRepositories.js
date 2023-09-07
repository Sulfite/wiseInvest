const db = require('../db/dbMySql');

const listAllBnUserRepository = async (idUser) => {
  try {
    const result = await db.query(`SELECT *
                                FROM dbo.Brokerage_Notes
                                WHERE ID_User = ${idUser};`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const listsAllBnUserWalletRepository = async (idUser, idWallet) => {
  try {
    const result = await db.query(`SELECT *
                                FROM dbo.Brokerage_Notes
                                WHERE ID_User   = ${idUser}
                                  AND ID_Wallet = ${idWallet};`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const registerBnRepository = async (data) => {
  try {
    const result = await db.query(`INSERT INTO dbo.Brokerage_Notes(CD_Stocks, Price, Amount, DT_Purchase, DT_Sale, DH_Inclusion, ID_User, ID_Investment_Brokerage, ID_Wallet, ID_Category, ID_Subcategory) VALUES (?,?,?,?,?,?,?,?,?,?,?)`, 
                               [data.CD_Stocks, data.Price, data.Amount, data.DT_Purchase, data.DT_Sale, new Date(), data.ID_User, data.ID_Investment_Brokerage, data.ID_Wallet, data.ID_Category, data.ID_Subcategory]);

    return [result[0]["affectedRows"], result[0]["insertId"]];
  } catch (error) {
    return error;
  }
}

const updateBnRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE dbo.Brokerage_Notes 
                                   SET CD_Stocks = ?
                                      ,Price = ?
                                      ,Amount = ?
                                      ,DT_Purchase = ?
                                      ,DT_Sale = ?
                                      ,DH_Change = ?
                                      ,ID_Investment_Brokerage = ?
                                      ,ID_Wallet = ?
                                      ,ID_Category = ?
                                      ,ID_Subcategory = ?
                                   WHERE ID_Brokerage_Notes = ?;`, 
                                   [data.CD_Stocks, data.Price, data.Amount, data.DT_Purchase, data.DT_Sale, new Date(), data.ID_Investment_Brokerage, data.ID_Wallet, data.ID_Category, data.ID_Subcategory, id]);

    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const detailsBnRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Brokerage_Notes
                                   WHERE ID_Brokerage_Notes = ${id}`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteBnRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Brokerage_Notes 
                                   WHERE ID_Brokerage_Notes = ${id}`);
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

module.exports= {
  listAllBnUserRepository,
  listsAllBnUserWalletRepository,
  registerBnRepository,
  updateBnRepository,
  detailsBnRepository,
  deleteBnRepository
}