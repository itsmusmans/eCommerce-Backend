// jshint esversion:6
const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");

// Handle Uncaught Excretion

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to uncaught exception");

  process.exit(1);
});

//config path
dotenv.config({ path: "backend/config/config.env" });

//connectiong Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// Handle Unhandled Promise  Rejections

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled Promise Rejections");
  server.close(() => {
    process.exit(1);
  });
});
