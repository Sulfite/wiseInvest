const { isNullOrEmpty } = require("../Ultils/Ultils");
const addressRepositorie = require("../Repositories/addressRepositories");

// Countries
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

// States
const registerStateService = async (data) => {

  // Usar funcao de anti injecton
  // Usar função de validacao de json
  
  const newState = { 
    Name_State: data.nameState,
    Abbreviation: data.abbreviation,
    ID_Country: data.idCountry
  };

  try {
    const db = await addressRepositorie.registerStateRepository(newState);

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

const listStatesService = async () => {
  try {
    const db = await addressRepositorie.listStatesRepository();
    
    if(db.length === 0) {
      const exception = new Error('Not found States.');
      exception.code = 404;
      throw exception;
    }
    return db;

  } catch (error) {
    let message = {"title": error.name, "Message:": error.message, "code": error.code }
    return message;
  }
}

const detailsStateService = async (id) => {
  try {

    if (isNullOrEmpty(id)) {
      const exception = Error('Check the parameters sent.');;
      exception.code = 422;
      throw exception;
    }

    const db = await addressRepositorie.detailsStateRepository(id);
    
    if(db.length === 0) {
      const exception = new Error(`Not found State. ${id}`);
      exception.code = 404;
      throw exception;
    }
    return db;
  } catch (error) {
    let message = {"title": error.name, "Message:": error.message, "code": error.code }
    return message;
  }
}

const updateStateSevice = async (id, data) => {

  try {

    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    const { nameState,
            abbreviation,
            idCountry  } = data

    const updateState = {
      Name_State: nameState,
      Abbreviation: abbreviation,
      ID_Country: idCountry
    }

    const db = await addressRepositorie.updateStateRepository(id, updateState);

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

const deleteStateService = async (id) => {

  try {
    const db = await addressRepositorie.deleteStateRepository(id);

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
  deleteCountryService,

  listStatesService,
  registerStateService,
  updateStateSevice,
  detailsStateService,
  deleteStateService,
}