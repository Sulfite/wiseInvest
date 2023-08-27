const db = require('../db/dbMySql');

const listCategoriesRepository = async () => {
  try {
    let result = await db.query(`SELECT *
                                FROM dbo.Categories;`);
    return result[0][0];
  } catch (error) {
    return error;
  }
}

const registerRepository = async (data) => {
  try {
    const result = await db.query("INSERT INTO dbo.Categories(Description_Category) VALUES (?)", [data.Description_Category]);
    
    return [result[0]["affectedRows"], result[0]["insertId"]];
  } catch (error) {
    return error;
  }
}

const updateRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE Categories 
                                   SET Description_Category = ?
                                   WHERE ID_Category = ?;`, [data.Description_Category, id]);

    
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const detailsCategoryRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Categories
                                   WHERE ID_Category = ${id}`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteRepository = async (id) => {
  try {
    const result = await db.query(`DELETE dbo.Categories 
                                   WHERE ID_Category = ${id}`);
    
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

module.exports= {
  listCategoriesRepository,
  registerRepository,
  updateRepository,
  detailsCategoryRepository,
  deleteRepository
}