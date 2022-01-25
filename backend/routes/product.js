// jshint esversion:6
const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProducts,
} = require("../controllers/productController");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/admin/product/new").post(newProduct);
router.route("/admin/product/:id").put(updateProduct).delete(deleteProducts);

module.exports = router;
