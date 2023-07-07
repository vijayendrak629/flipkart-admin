const ProductController = require("../controller/ProductController.js"); // Update the path here

const AppRouting = require('express').Router();

AppRouting.get("/", ProductController.productHome);

module.exports = AppRouting;
