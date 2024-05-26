const express = require('express');
const { getAllCategories, createCategory, getCategory, updateCategory, deleteCategory } = require('../controller/categoryController');

const router = express.Router();

router
    .route('/')
    .get(getAllCategories)
    .post(createCategory);

router
    .route('/:id')
    .get(getCategory)
    .patch(updateCategory)
    .delete(deleteCategory);

module.exports = router;