const express = require('express');
const router = express.Router();

const { isValidToken } = require("../Ultils/Ultils");
const categoryController = require("../Controllers/categoriesController");

// categories
router.get("/listCategories",  categoryController.listCategoriesController);
router.get("/detailsCategory/:id", categoryController.detailsCategoryController);
router.post("/addCategory", categoryController.registerController);
router.put("/updateCategory/:id", categoryController.updateController);
router.delete("/deleteCategory/:id", categoryController.deleteCategoryController);

// categories
router.get("/subcategories/listSubcategories",  categoryController.listSubcategoriesController);
router.get("/subcategories/detailsSubcategory/:id", categoryController.detailsSubcategoryController);
router.post("/subcategories/addSubcategory", categoryController.registerSubcategoryController);
router.put("/subcategories/updateSubcategory/:id", categoryController.updateSubcategoryController);
router.delete("/subcategories/deleteSubcategory/:id", categoryController.deleteSubcategoryController);

module.exports = router;