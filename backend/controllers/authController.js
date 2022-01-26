// jshint esversion:8

const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlerwares/catchAsyncErrors");

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "avatars/pngwing.com_1_bf5lgb",
      url: "https://res.cloudinary.com/itsmusmans/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1643194474/avatars/pngwing.com_1_bf5lgb.png",
    },
  });
  res.status(201).json({
    success: true,
    user,
  });
});
