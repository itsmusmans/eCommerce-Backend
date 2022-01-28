// jshint esversion:6
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlerwares/errors");

app.use(express.json());
app.use(cookieParser());

//Import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");

app.use("/api/v1", products);
app.use("/api/v1", auth);
//Middlerware to Handle the Errors
app.use(errorMiddleware);

module.exports = app;
