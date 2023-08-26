const db = require('../db/dbMySql');

const registerCountryRepository = async (data) => {
  try {
    const result = await db.query("INSERT INTO dbo.Countries(Name_Country, Abbreviation, Prefix) VALUES (?,?,?)", [data.Name_Country, data.Abbreviation, data.Prefix]);
    return [result[0]["affectedRows"], result[0]["insertId"]];
  } catch (error) {
    return error;
  }
}

const listCountriesRepository = async () => {
  try {
    let result = await db.query(`SELECT *
                                FROM dbo.Countries;`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const detailsCountryRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Countries
                                   WHERE ID_Country = ${id}`);
    return result[0][0];
  } catch (error) {
    return [error];
  }
}

const updateCountryRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE dbo.Countries
                                 SET Name_Country = ?
                                    ,Abbreviation = ?
                                    ,Prefix       = ?
                                 WHERE ID_Country = ?;`, [data.Name_Country, data.Abbreviation, data.Prefix, id]);

    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const deleteCountryRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Countries 
                                   WHERE ID_Country = ${id}`);
    
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

module.exports= {
  listCountriesRepository,
  registerCountryRepository,
  updateCountryRepository,
  detailsCountryRepository,
  deleteCountryRepository
}