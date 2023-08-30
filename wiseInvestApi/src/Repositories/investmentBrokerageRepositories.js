const db = require('../db/dbMySql');

const listIBRepository = async () => {
  try {
    let result = await db.query(`SELECT *
                                FROM dbo.Investment_Brokerage`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const registerIBRepository = async (data) => {

  try {
    let result = await db.query("INSERT INTO dbo.Investment_Brokerage(Name_Investment_Brokeragem, ID_Country) VALUES (?,?)", [data.Name_Investment_Brokeragem, data.ID_Country]);
    result = result[0];
    return [result["affectedRows"], result["insertId"]];
  } catch (error) {
    return error;
  }
}

const updateIBRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE dbo.Investment_Brokerage 
                                   SET Name_Investment_Brokeragem = ?
                                      ,ID_Country                 = ?
                                   WHERE ID_Investment_Brokerage = ?;`, [data.Name_Investment_Brokeragem, data.ID_Country, id]);

    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const detailsIBRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Investment_Brokerage
                                   WHERE ID_Investment_Brokerage = ${id}`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteIBRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Investment_Brokerage 
                                   WHERE ID_Investment_Brokerage = ${id}`);
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

module.exports= {
  listIBRepository,
  registerIBRepository,
  updateIBRepository,
  detailsIBRepository,
  deleteIBRepository
}