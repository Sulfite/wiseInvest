const categoryServices = require("../Services/categoriesServices");
const { isNullOrEmpty } = require('../Ultils/Ultils');

// Caterory
const listCategoriesController = async (req, res, next) => {
  try {
    const response = await categoryServices.listCategoriesService();
    res.status(200).send(JSON.stringify(response));
  }
  catch(error) {
    return next(JSON.stringify(error));
  }
}

const registerController = async (req, res, next) => {
 // colocar verificacoes iniciais 
  const data = req.body;

  try {
    const response = await categoryServices.registerService(data);

    if (response.code > 0 && response.title === 'Error') {  
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }
    res.status(201).send(JSON.stringify(response));
 
  }
  catch(e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(JSON.stringify(message));
  }
}

const updateController = async (req, res, next) => {
  const data = req.body;
  const _id = req.params.id;
  
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await categoryServices.updateSevice(_id, data);

    res.status(200).send(JSON.stringify(response));

  } catch (e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const detailsCategoryController = async (req, res, next) => {
  const _id = req.params.id;

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await categoryServices.detailsCategoryService(_id);
    res.status(200).send(response);
  } catch (e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const deleteCategoryController = async (req, res, next) => {
  const _id = req.params.id;
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422
      throw exception;
    }

    const response = await categoryServices.deleteCategoryService(_id);
    if (response.code > 0 && response.title === 'Error') {
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    if (response[0] === 1)
      res.status(200).send(true);
    
  } catch (e) {
    const message = {"title": e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

// Caterory
const listSubcategoriesController = async (req, res, next) => {
  try {
    const response = await categoryServices.listSubcategoriesService();
    res.status(200).send(JSON.stringify(response));
  }
  catch(error) {
    return next(JSON.stringify(error));
  }
}

const registerSubcategoryController = async (req, res, next) => {
 // colocar verificacoes iniciais 
  const data = req.body;

  try {
    const response = await categoryServices.registerSubcategoryService(data);

    if (response.code > 0 && response.title === 'Error') {  
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }
    res.status(201).send(JSON.stringify(response));
 
  }
  catch(e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(JSON.stringify(message));
  }
}

const updateSubcategoryController = async (req, res, next) => {
  const data = req.body;
  const _id = req.params.id;
  
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await categoryServices.updateSubcategorySevice(_id, data);

    res.status(200).send(JSON.stringify(response));

  } catch (e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const detailsSubcategoryController = async (req, res, next) => {
  const _id = req.params.id;

  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422;
      throw exception;
    }

    const response = await categoryServices.detailsSubcategoryService(_id);
    res.status(200).send(response);
  } catch (e) {
    let message = {"title": e.name, "Message:": e.message }
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

const deleteSubcategoryController = async (req, res, next) => {
  const _id = req.params.id;
  try {
    if (isNullOrEmpty(_id)) {
      const exception = new Error('Check the parameters sent.');
      exception.code = 422
      throw exception;
    }

    const response = await categoryServices.deleteSubcategoryService(_id);
    if (response.code > 0 && response.title === 'Error') {
      const exception = new Error(response.message);
      exception.code = response.code;
      throw exception;
    }

    if (response[0] === 1)
      res.status(200).send(true);
    
  } catch (e) {
    const message = {"title": e.name, "Message:": e.message };
    return res.status(e.code).send(`${JSON.stringify(message)}`);
  }
}

module.exports = { 
  listCategoriesController,
  registerController,
  updateController,
  detailsCategoryController,
  deleteCategoryController,

  listSubcategoriesController,
  registerSubcategoryController,
  updateSubcategoryController,
  detailsSubcategoryController,
  deleteSubcategoryController
};