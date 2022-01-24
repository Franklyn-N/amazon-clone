import data from "../data.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const getUser = async (req, res) => {
  const result = await User.find();
  res.status(201).json({
    message: "Fetched successfully",
    data: result,
  });
};

const createUser = async (req, res) => {
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
};

const signIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "User does not exist!" });
    }
    loadedUser = user;
    const confirmPassword = bcrypt.compareSync(password, user.password);
    if (!confirmPassword) {
      return res.status(401).json({ message: "Wrong password!" });
    }
    const token = jwt.sign(
      {
        email: loadedUser.email,
        userId: loadedUser._id.toString(),
      },
      config.secret.secret,
      { expiresIn: "1h" }
    );
    return res
      .status(200)
      .json({ token: token, user: loadedUser });
  } catch (error) {
    console.log(error.message);
  }
};

export default { getUser, createUser, signIn };
