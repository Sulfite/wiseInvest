const db = require('../db/dbMySql');

// Category
const listCategoriesRepository = async () => {
  try {
    let result = await db.query(`SELECT *
                                FROM dbo.Categories;`);
    return result[0];
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
    const result = await db.query(`DELETE FROM dbo.Categories 
                                   WHERE ID_Category = ${id}`);
    
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

// Subcategory
const listSubcategoriesRepository = async () => {
  try {
    let result = await db.query(`SELECT *
                                FROM dbo.Subcategories;`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const registerSubcategoryRepository = async (data) => {
  try {
    const result = await db.query("INSERT INTO dbo.Subcategories(Description_Subcategory, ID_Category) VALUES (?,?)", [data.Description_Subcategory, data.ID_Category]);
    
    return [result[0]["affectedRows"], result[0]["insertId"]];
  } catch (error) {
    return error;
  }
}

const updateSubcategoryRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE Subcategories 
                                   SET Description_Subcategory = ?
                                      ,ID_Category             = ?
                                   WHERE ID_Subcategory = ?;`, [data.Description_Subcategory, data.ID_Category, id]);

    
    return [result[0]["affectedRows"]];
  } catch (error) {
    return error;
  }
}

const detailsSubcategoryRepository = async (id) => {
  try {
    const result = await db.query(`SELECT *
                                   FROM dbo.Subcategories
                                   WHERE ID_Subcategory = ${id}`);
    return result[0];
  } catch (error) {
    return error;
  }
}

const deleteSubcategoryRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Subcategories 
                                   WHERE ID_Subcategory = ${id}`);
    
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
  deleteRepository,

  listSubcategoriesRepository,
  registerSubcategoryRepository,
  updateSubcategoryRepository,
  detailsSubcategoryRepository,
  deleteSubcategoryRepository
}