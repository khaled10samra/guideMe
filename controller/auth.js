const auth = require("../model/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const validator = require("validator");
const mongoose = require('mongoose'); // <-- Add this line


const register = async (req, res) => {
  const { email, password, userName, userImage } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  // Hash password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  // Create user
  const adduser = new auth({
    email,
    password: hash,
    userName,
    userImage,
  });

  try {
    const emailexist = await auth.findOne({ email });
    if (emailexist) {
      return res.status(401).json({ msg: "Email already exists" });
    }

    const saveduser = await adduser.save();
    res.status(201).json(saveduser);
  } catch (error) {
    res.status(400).json(error);
  }
};


const login = async (req, res) => {
  try {
    const user = await auth.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ msg: "email not valid" });
    }
    const isPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isPassword) {
      return res.status(401).json({ msg: "password not valid" });
    }

    const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, "sec");
    user.token = token;
    await user.save();
    const { __v, password, isAdmin, ...other } = user._doc;
    res
      .header("Authorization", token)
      .send({ role: "authenticated",accessToken:token ,user: other });

   
  } catch (error) {
    return res.status(400).json({ msg: "error in login" });
  }
};



const verifyToken = (req, res, next) => {
   const token = req.header("Authorization")?.split(" ")[1]; // Extract Bearer token
  // const token =req.body.token
  
    if (!token) {
      return res.status(401).json({ message: "Access token is required" });
    }
  
    jwt.verify(token, "sec", (err, decoded) => {
      if (err) {
        return res.status(403).json({ "role": "unauthenticated" });
      }
  
      req.userId = decoded._id; // Attach user ID to request object
      next();
    });
  };


  const getUserByToken=async (req, res) => {
    try {
      // Fetch user using decoded userId from the token
      const user = await auth.findById(req.userId).select("-password -__v -createdAt -updatedAt"); // Exclude password and __v
  
      if (!user) {
        return res.status(404).json({ "role": "unauthenticated" });
      }
  
      res.status(200).json({
        "role": "authenticated",
        user,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID format." });
    }

    const user = await auth.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

 const updateUserProfile = async (req, res) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID format.' });
  }

  try {
    const updatedUser = await auth.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { login, register, verifyToken,getUserByToken,getUserById,updateUserProfile };