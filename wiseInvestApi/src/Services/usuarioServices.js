const { hash, isNullOrEmpty, signToken, isValidToken, getInfoToken } = require("../Ultils/Ultils");
const usuarioRepositorie = require("../Repositories/usuarioRepositories");
const jwt = require("jsonwebtoken");


const loginService = async (user, password) => {
    const passwordCrypto = hash(password);
    const db = await usuarioRepositorie.loginRepository(user);

    if (isNullOrEmpty(db)) {
        const exception = new Error("9002.Usuario ou senha Inválidos");
        exception.code = 401;
        throw exception;
    }

    if (db.Password_User === passwordCrypto) {

        let data = {
            User_ID: db.ID_user,
            Perfil_ID: db.ID_Access_Type
        }

        let token = signToken(data);

        let callback = {
            authorized: true,
            token: token,
            personType: db.ID_Access_Type
        }
        
        return callback;
    } else {
        const exception = new Error("9002.Usuario ou senha Inválidos");
        exception.code = 401;
        throw exception;
    }
};

const registerService = async (data) => {
    // Usar funcao de anti injecton
    // Usar função de validacao de json

    const passwordCrypto = hash(data.passwordUser);
    const newUser = {
        Name_user: data.nameUser,
        Email_user: data.emailUser,
        Password_user: passwordCrypto,
        ID_Access_Type: 4,
    };

    try {
        const db = await usuarioRepositorie.registerRepository(newUser);

        if (db.length === 0) {
            const exception = new Error("Not insert.");
            exception.code = 500;
            throw exception;
        }

        return { insert: true };
    } catch (error) {
        const message = {
            code: error.code,
            title: error.name,
            message: error.message,
        };
        return message;
    }
};

const updateSevice = async (token, data) => {
    // Fazer requisição para verificar se o usuario existe

    if (isNullOrEmpty(token)) {
        const exception = new Error(
            "9003.Não autorizado."
        );
        exception.code = 401;
        throw exception;
    }

    const { id } = getInfoToken(token);
    let exists = await verifyUserService(id);

    try {
        if (exists === false) {
            const exception = new Error(
                "9003.Não foi encontrado usuário para ser alterados."
            );
            exception.code = 404;
            throw exception;
        }

        if (isNullOrEmpty(data)) {
            const exception = new Error(
                "9003.Não foi encontrado usuário para ser alterados."
            );
            exception.code = 404;
            throw exception;
        }

        

        let {
            nameUser,
            emailUser,
            dtBirth,
            nationalIdentifier,
            typePerson,
        } = data;

        // if (!isNullOrEmpty(passwordUser)) {
        //     passwordUser = hash(passwordUser);
        // }

        // if ((typePerson !== 'F') || (typePerson !== 'J')) {
        //   const exception = new Error('Check the parameters sent. typePerson 1');
        //   exception.code = 422;
        //   throw exception;
        // }

        const newData = {
            nameUser,
            emailUser,
            dtBirth,
            nationalIdentifier,
            typePerson,
        };

        const db = await usuarioRepositorie.updateRepository(id, newData);

        if (isNullOrEmpty(db.length)) {
            const exception = new Error("Not insert");
            exception.code = 500;
            throw exception;
        }

        return db;
    } catch (error) {
        const message = { title: error.name, "Message:": error.message };
        return message;
    }
};


const updatePlanSevice = async (token, data) => {
    // Fazer requisição para verificar se o usuario existe

    if (isNullOrEmpty(token)) {
        const exception = new Error(
            "9003.Não autorizado."
        );
        exception.code = 401;
        throw exception;
    }

    const { id } = getInfoToken(token);
    let exists = await verifyUserService(id);

    try {
        if (exists === false) {
            const exception = new Error(
                "9003.Não foi encontrado usuário para ser alterados."
            );
            exception.code = 404;
            throw exception;
        }

        if (isNullOrEmpty(data)) {
            const exception = new Error(
                "9003.Não foi encontrado usuário para ser alterados."
            );
            exception.code = 404;
            throw exception;
        }

        let {
            idAccessType
        } = data;

        const db = await usuarioRepositorie.updatePlanRepository(id, idAccessType);

        if (isNullOrEmpty(db.length)) {
            const exception = new Error("Not insert");
            exception.code = 500;
            throw exception;
        }

        return db;
    } catch (error) {
        const message = { title: error.name, "Message:": error.message };
        return message;
    }
};

const verifyUserService = async (id) => {
    const db = await usuarioRepositorie.VerifyUserRepository(id);

    if (db.length > 0) return true;
    else return false;
};

const deleteUserService = async (id) => {
    try {
        const verify = await verifyUserService(id);

        if (!verify) {
            const exception = new Error("Id not found.");
            exception.code = 404;
            throw exception;
        }

        const db = await usuarioRepositorie.deleteRepository(id);

        if (isNullOrEmpty(db.length)) {
            const exception = new Error("Not delete");
            exception.code = 500;
            throw exception;
        }

        return db;
    } catch (error) {
        const message = {
            code: error.code,
            title: error.name,
            message: error.message,
        };
        return message;
    }
};
const getUserService = async (data) => {
    
    if (isNullOrEmpty(data)) {
        const exception = new Error("Check the sent token parameter.");
        exception.code  = 422;
        throw exception;
    }

    const { id } = getInfoToken(data);
    
    try {
        const db = await usuarioRepositorie.getUserRepository(id);

        if (db.length === 0) {
            const exception = new Error("User not found.");
            exception.code = 404;
            throw exception;
        }

        return db[0];
    } catch (error) {
        const message = {
            code: error.code,
            title: error.name,
            message: error.message,
        };
        return message;
    }
};

const getUsersPaginationService = async (data) => {
    const { offset, limit } = data;

    if (isNullOrEmpty(offset) || typeof offset != "number") {
        const exception = new Error("Check the sent offset parameter.");
        exception.code = 422;
        throw exception;
    }

    if (isNullOrEmpty(limit) || typeof limit != "number") {
        const exception = new Error("Check the sent limit parameter.");
        exception.code = 422;
        throw exception;
    }

    try {
        const db = await usuarioRepositorie.getUsersPaginationRepository(
            offset,
            limit
        );

        if (db.length === 0) {
            const exception = new Error("Users not found.");
            exception.code = 404;
            throw exception;
        }

        return db;
    } catch (error) {
        const message = {
            code: error.code,
            title: error.name,
            message: error.message,
        };
        return message;
    }
};

const filterUsersService = async (data) => {
    const {
        name,
        email,
        dtBirth,
        nationalIdentifier,
        typePerson,
        idAccessType,
        active,
    } = data;

    let parameterSearch = "";

    if (!isNullOrEmpty(name)) {
        parameterSearch = `Name_user LIKE '%${name}%' , `;
    }

    if (!isNullOrEmpty(email)) {
        parameterSearch += `Email_user LIKE '%${email}%' , `;
    }

    if (!isNullOrEmpty(dtBirth)) {
        parameterSearch += `dtBirth = '${dtBirth}' , `;
    }

    if (!isNullOrEmpty(nationalIdentifier)) {
        parameterSearch += `nationalIdentifier = '${nationalIdentifier}' , `;

        if (isNullOrEmpty(typePerson)) {
            if (nationalIdentifier.length > 11) {
                typePerson = "J";
            } else {
                typePerson = "F";
            }
        }
    }

    if (!isNullOrEmpty(typePerson)) {
        parameterSearch += `Type_Person = '${typePerson}' , `;
    }

    if (!isNullOrEmpty(email)) {
        parameterSearch += `Email_user LIKE '%${email}%' , `;
    }

    if (!isNullOrEmpty(idAccessType) && typeof idAccessType == "number") {
        parameterSearch += `ID_Access_Type= ${idAccessType} , `;
    }

    if (!isNullOrEmpty(active)) {
        parameterSearch += `Active_User = ${active}`;
    }

    parameterSearch = parameterSearch.replaceAll(",", "AND");

    console.log(parameterSearch);

    try {
        const db = usuarioRepositorie.filterUsersRepository(parameterSearch);

        // return db;
        return [];
    } catch (error) {
        const message = {
            code: error.code,
            title: error.name,
            message: error.message,
        };
        return message;
    }
};

module.exports = {
    loginService,
    registerService,
    updateSevice,
    verifyUserService,
    deleteUserService,
    getUserService,
    getUsersPaginationService,
    filterUsersService,
    updatePlanSevice,
};
