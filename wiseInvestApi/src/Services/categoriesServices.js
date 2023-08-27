const { isNullOrEmpty } = require("../Ultils/Ultils");
const categoriesRepositorie = require("../Repositories/categoriesRepositories");

// Category
const listCategoriesService = async () => {
  try {
    const db = await categoriesRepositorie.listCategoriesRepository();
  
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

const registerService = async (data) => {
  // Usar funcao de anti injecton
  // Usar função de validacao de json

  const newCategory = { 
    Description_Category: data.descriptionName
  };

  try {
    const db = await categoriesRepositorie.registerRepository(newCategory);

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

const updateSevice = async (id, data) => {
  try {
    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    let { descriptionName } = data
    
    const updateCategory = {
      Description_Category: descriptionName
    }

    const db = await categoriesRepositorie.updateRepository(id, updateCategory);

    if(db.length === 0) {
      const exception = new Error('Not updated.');
      exception.code = 500;
      throw exception;
    }

    return db;
    
  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

const detailsCategoryService = async (id) => {

  try {
    const db = await categoriesRepositorie.detailsCategoryRepository(id);
  
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

const deleteCategoryService = async (id) => {
  try {
    const db = await categoriesRepositorie.deleteRepository(id);

    if(db.length === 0) {
      const exception = new Error('Not delete.');
      exception.code = 500;
      throw exception;
    }
    return db;
  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

// Subcategory
const listSubcategoriesService = async () => {
  try {
    const db = await categoriesRepositorie.listSubcategoriesRepository();
  
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

const registerSubcategoryService = async (data) => {
  // Usar funcao de anti injecton
  // Usar função de validacao de json

  const newSubcategory = { 
    Description_Subcategory: data.descriptionName,
    ID_Category: data.idCategory
  };

  try {
    const db = await categoriesRepositorie.registerSubcategoryRepository(newSubcategory);

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

const updateSubcategorySevice = async (id, data) => {
  try {
    if (isNullOrEmpty(data)) {
      const exception = new Error('9003.Não foi encontrado usuário para ser alterados.');
      exception.code = 404;
      throw exception;
    }

    let { descriptionName,
          idCategory } = data
    
    const updateSubcategory = {
      Description_Subcategory: descriptionName,
      ID_Category: idCategory
    }

    const db = await categoriesRepositorie.updateSubcategoryRepository(id, updateSubcategory);

    if(db.length === 0) {
      const exception = new Error('Not updated.');
      exception.code = 500;
      throw exception;
    }

    return db;
    
  } catch (error) {
    const message = {"code": error.code, "title": error.name, "message": error.message }
    return message;
  }
}

const detailsSubcategoryService = async (id) => {

  try {
    const db = await categoriesRepositorie.detailsSubcategoryRepository(id);
  
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

const deleteSubcategoryService = async (id) => {
  try {
    const db = await categoriesRepositorie.deleteSubcategoryRepository(id);

    if(db.length === 0) {
      const exception = new Error('Not delete.');
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
  listCategoriesService,
  registerService,
  updateSevice,
  detailsCategoryService,
  deleteCategoryService,

  listSubcategoriesService,
  registerSubcategoryService,
  updateSubcategorySevice,
  detailsSubcategoryService,
  deleteSubcategoryService
}