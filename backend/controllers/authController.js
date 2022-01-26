// jshint esversion:8

const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlerwares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

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
  sendToken(user, 200, res);
});

// Login User /api/v1/login

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is entered by user
  if (!email || !password) {
    return next(
      new ErrorHandler("Please enter a valid email and password", 400)
    );
  }

  // Finding user in database
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  // Check if password is correct or not
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});
