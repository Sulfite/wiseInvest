const db = require('../db/dbMySql');

const loginRepository = async (user) => {
  try {
    let result = await db.query(`SELECT Email_User
                                       ,Password_User
                                       ,ID_Access_Type
                                       ,ID_user
                                 FROM dbo.Users 
                                 WHERE Email_User = '${user}';`);
    return result[0][0];
  } catch (error) {
    return [];
  }
}

const registerRepository = async (data) => {
  try {
    let result = await db.query("INSERT INTO dbo.Users(Name_user, Email_user, Password_user, Active_User, ID_Access_Type, DH_Inclusion ) VALUES (?,?,?,?,?,?)", [data.Name_user, data.Email_user, data.Password_user, true, data.ID_Access_Type, new Date()]);
    result = result[0];
    return [result["affectedRows"], result["insertId"]];
  } catch (error) {
    return [];
  }
}

const updateRepository = async (id, data) => {
  try {
    const result = await db.query(`UPDATE Users 
                                   SET Name_user           = ?
                                      ,Email_user          = ?
                                      ,Password_user       = ?
                                      ,DT_Birth            = ?
                                      ,National_Identifier = ?
                                      ,Type_Person         = ?
                                      ,ID_Access_Type      = ?
                                      ,DH_Change           = ?
                                   WHERE ID_user = ?;`, [data.nameUser, data.emailUser, data.passwordUser, data.dtBirth, data.nationalIdentifier, data.typePerson, data.idAccessType, new Date(), id]);

    return [result[0]["affectedRows"]];
  } catch (error) {
    return [];
  }
}

const VerifyUserRepository = async (id) => {
  try {
    const result = await db.query(`SELECT 1
                                   FROM dbo.Users
                                   WHERE ID_user = ${id}`);
    return result[0];
  } catch (error) {
    return [];
  }
}

const deleteRepository = async (id) => {
  try {
    const result = await db.query(`DELETE FROM dbo.Users 
                                   WHERE ID_user = ${id}`);
    return [result[0]["affectedRows"]];
  } catch (error) {
    return [];
  }
}

const getUsersPaginationRepository = async (offset, limit) => {
  
  try {
    const result = await db.query(`SELECT * FROM dbo.users
                                   LIMIT ${offset}, ${limit};`);

    return result[0];
  } catch (error) {
    return [];
  }
}

const filterUsersRepository = async (sql) => {

  try {


    const result = [];
    // const result = await db.query(`SELECT * FROM dbo.users WHERE ${sql}`);

    return result;
    
  } catch (e) {
    return [];
  }

}

module.exports= {
  loginRepository,
  registerRepository,
  updateRepository,
  VerifyUserRepository,
  deleteRepository,
  getUsersPaginationRepository,
  filterUsersRepository
}