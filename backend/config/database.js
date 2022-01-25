// jshint esversion:6

const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
    console.log(`MongoDB connected with Host: ${con.connection.host}`);
  });
};

module.exports = connectDatabase;
