const addressServices = require("../Services/addressServices");
const { isNullOrEmpty } = require("../Ultils/Ultils");

const registerCountryController = async (req, res, next) => {
  // colocar verificacoes iniciais
  const data = req.body;

  try {
    const response = await addressServices.registerCountryService(data);

    if (response.length === 0) {
      const exception = new Error("Error when inserting a new record.");
      exception.code = 500;
      throw exception;
    }

    res.status(201).send(`${JSON.stringify(response)}`);
  } catch (e) {
    let message = { title: e.name, "Message:": e.message };
    return res.status(500).send(`${JSON.stringify(message)}`);
  }
};

const listCountriesController = async (req, res, next) => {
  try {
    const response = await addressServices.listCountriesService();

    if (response.length === 0) {
      const exception = new Error("Error when inserting a new record.");
      exception.code = 500;
      throw exception;
    }

    res.status(200).send(JSON.stringify(response));
  } catch (error) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
};

const datailsCountryController = async (req, res, next) => {
  const _id = req.params.id;

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error("Check the parameters sent.");
      exception.code = 422;
      throw exception;
    }

    const response = await addressServices.detailsCountryService(_id);

    if (response.length === 0) {
      const exception = new Error("Error.");
      exception.code = 500;
      throw exception;
    }

    res.status(200).send(response);
  } catch (e) {
    let message = { title: e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
};

const updateCountryController = async (req, res, next) => {
  const data = req.body;
  const _id = req.params.id;

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error("Check the parameters sent.");
      exception.code = 422;
      throw exception;
    }

    const response = await addressServices.updateCountrySevice(_id, data);

    if (response.length === 0) {
    const exception = new Error(`Error when Updated a record. ${_id}`);
      exception.code = 500;
      throw exception;
    }

    res.status(200).send(response);
  } catch (e) {
    let message = { title: e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
};

const deleteCountryController = async (req, res, next) => {
  const _id = req.params.id;

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error("Check the parameters sent.");
      exception.code = 422;
      throw exception;
    }

    const response = await addressServices.deleteCountryService(_id);
    res.status(200).send(response);
  } catch (e) {
    let message = { title: e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
};

module.exports = {
  listCountriesController,
  registerCountryController,
  updateCountryController,
  datailsCountryController,
  deleteCountryController,
};