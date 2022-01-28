// jshint esversion:8
const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlerwares/auth");

router.route("/products").get(getProducts);

router.route("/product/:id").get(getSingleProduct);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProducts);

module.exports = router;
