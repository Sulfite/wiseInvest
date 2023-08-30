const { isNullOrEmpty } = require("../Ultils/Ultils");
const investmentBrokeragemRepositorie = require("../Repositories/investmentBrokerageRepositories");

const listIBService = async () => {
  
  try {
    const db = await investmentBrokeragemRepositorie.listIBRepository();
  
    if(db.length === 0) {
      const exception = new Error('Not selected.');
      exception.code = 500;
      throw exception;
    }
  
    return db;

  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }

}

const registerIBService = async (data) => {

  // Usar funcao de anti injecton
  // Usar função de validacao de json
  
  const newInvestmentBrokeragem = { 
    Name_Investment_Brokeragem: data.nameInvestmentBrokeragem,
    ID_Country: data.idCountry
  };

  try {
    const db = await investmentBrokeragemRepositorie.registerIBRepository(newInvestmentBrokeragem);

    if(db.length === 0) {
      const exception = new Error('Not insert.');
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

const updateIBSevice = async (id, data) => {
  // Fazer requisição para verificar se o usuario existe

  try {

    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    const { nameInvestmentBrokeragem,
            idCountry } = data
    
    const updateInvestmentBrokeragem = { 
      Name_Investment_Brokeragem: nameInvestmentBrokeragem,
      ID_Country: idCountry
    };

    const db = await investmentBrokeragemRepositorie.updateIBRepository(id, updateInvestmentBrokeragem);

    if(db.length === 0) {
      const exception = new Error('Not updated.');
      exception.code = 500;
      throw exception;
    }

    return db;
    
  } catch (error) {
    const message = {"title": error.name, "Message:": error.message }
    return message;
  }
}

const detailsIBService = async (id) => {

  try {
    const db = await investmentBrokeragemRepositorie.detailsIBRepository(id);

    if(db.length === 0) {
      const exception = new Error('Not delete');
      exception.code = 500;
      throw exception;
    }

    return db;

  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

const deleteIBService = async (id) => {

  try {
    const db = await investmentBrokeragemRepositorie.deleteIBRepository(id);

    if(db.length === 0) {
      const exception = new Error('Not delete');
      exception.code = 500;
      throw exception;
    }

    return db;

  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

module.exports = {
  listIBService,
  registerIBService,
  updateIBSevice,
  detailsIBService,
  deleteIBService
}