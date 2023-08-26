const { isNullOrEmpty } = require("../Ultils/Ultils");
const addressRepositorie = require("../Repositories/addressRepositories");

const registerCountryService = async (data) => {

  // Usar funcao de anti injecton
  // Usar função de validacao de json
  
  const newCountry = { 
    Name_Country: data.nameCountry,
    Abbreviation: data.abbreviation,
    Prefix: data.prefix
  };

  try {
    const db = await addressRepositorie.registerCountryRepository(newCountry);

    if(db.length === 0) {
      const exception = new Error('Not insert.');
      exception.code = 500;
      throw exception;
    }

    return db;
  } catch (error) {
    let message = {"title": error.name, "Message:": error.message, "code": error.code }
    return message;
  }
}

const listCountriesService = async () => {
  try {
    const db = await addressRepositorie.listCountriesRepository();
    
    if(db.length === 0) {
      const exception = new Error('Not found Countries.');
      exception.code = 404;
      throw exception;
    }
    return db;

  } catch (error) {
    let message = {"title": error.name, "Message:": error.message, "code": error.code }
    return message;
  }
}

const detailsCountryService = async (id) => {
  try {

    if (isNullOrEmpty(id)) {
      const exception = Error('Check the parameters sent.');;
      exception.code = 422;
      throw exception;
    }

    const db = await addressRepositorie.detailsCountryRepository(id);
    
    if(db.length === 0) {
      const exception = new Error(`Not found Country. ${id}`);
      exception.code = 404;
      throw exception;
    }
    return db;
  } catch (error) {
    let message = {"title": error.name, "Message:": error.message, "code": error.code }
    return message;
  }
}

const updateCountrySevice = async (id, data) => {

  try {

    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    let { nameCountry,
          abbreviation,
          prefix  } = data

    const newData = {
      Name_Country: nameCountry,
      Abbreviation: abbreviation,
      Prefix: prefix
    }

    const db = await addressRepositorie.updateCountryRepository(id, newData);

    if(isNullOrEmpty(db.length)) {
      const exception = new Error('Not updated');
      exception.code = 500;
      throw exception;
    }

    return db;
    
  } catch (error) {
    let message = {"title": error.name, "Message:": error.message }
    return message;
  }
}

const deleteCountryService = async (id) => {

  try {
    const db = await addressRepositorie.deleteCountryRepository(id);

    if(db.length === 0) {
      const exception = new Error('Not updated');
      exception.code = 500;
      throw exception;
    }
    
    return db;
  } catch (error) {
    let message = {"title": error.name, "Message:": error.message }
    return message;
  }
}

module.exports = {
  listCountriesService,
  registerCountryService,
  updateCountrySevice,
  detailsCountryService,
  deleteCountryService
}