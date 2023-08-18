const db = require('../db/dbMySql');

const loginRepository = async (user) => {
  try {
    let result = await db.query(`SELECT Email_User, Password_User 
                                FROM dbo.Users 
                                WHERE Email_User = '${user}';`);
    return result[0][0];
  } catch (error) {
    return error;
  }
}

const registerRepository = async (data) => {
  try {
    let result = await db.query("INSERT INTO dbo.Users(Name_user, Email_user, Password_user, Active_User, ID_Access_Type, DH_Inclusion ) VALUES (?,?,?,?,?,?)", [data.Name_user, data.Email_user, data.Password_user, true, data.ID_Access_Type, new Date()]);
    result = result[0];
    return {'affectedRows': result["affectedRows"], 'Id': result["insertId"]};
  } catch (error) {
    return {};
  }
}

const updateRepository = async (id, data) => {
  try {
    let result = await db.query(`UPDATE Users 
                                 SET Name_user           = ?
                                    ,Email_user          = ?
                                    ,Password_user       = ?
                                    ,DT_Birth            = ?
                                    ,National_Identifier = ?
                                    ,Type_Person         = ?
                                    ,ID_Access_Type      = ?
                                    ,DH_Change           = ?
                                 WHERE ID_user = ?;`, [data.nameUser, data.emailUser, data.passwordUser, data.dtBirth, data.nationalIdentifier, data.typePerson, data.idAccessType, new Date(), id]);

    result = result[0];
    return {'affectedRows': result["affectedRows"]};
  } catch (error) {
    return {};
  }
}

const VerifyUserRepository = async (id) => {
  try {
    const result = await db.query(`SELECT 1
                                   FROM dbo.Users
                                   WHERE ID_user = ${id}`);
    return result[0];
  } catch (error) {
    return {};
  }
}

const deleteRepository = async (id) => {
  try {
    let result = await db.query(`DELETE dbo.Users 
                                 WHERE ID_User = ${id}`);
    result = result[0]
    return {'affectedRows': result["affectedRows"]};
  } catch (error) {
    return {};
  }
}

module.exports= {
  loginRepository,
  registerRepository,
  updateRepository,
  VerifyUserRepository,
  deleteRepository
}