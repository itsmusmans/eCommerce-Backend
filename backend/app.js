// jshint esversion:6
const express = require("express");
const app = express();

const errorMiddleware = require("./middlerwares/errors");

app.use(express.json());

//Import all routes
const products = require("./routes/product");

app.use("/api/v1", products);
//Middlerware to Handle the Errors
app.use(errorMiddleware);

module.exports = app;
