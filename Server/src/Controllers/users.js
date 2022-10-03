const User = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  if (
    !Object.values(req.body).every((value) => value !== "") ||
    Object.keys(req.body).length === 0
  ) {
    return res
      .status(404)
      .json({ message: "Todos los campos son requeridos", error: true });
  }

  const email = req.body.email.toLowerCase().trim();
  const username = req.body.username;
  const password = req.body.password;

  const findUser = await User.findOne({ email });

  if (findUser) {
    return res
      .status(409)
      .json({ message: "Tu ya posees una cuenta", error: true });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    passwordHash,
  });

  try {
    const userCreate = await user.save();
    res.status(201).json({
      message: `Bienvenido ${username}`,
      user: userCreate,
      error: false,
    });
  } catch (error) {
    return res.status(409).json({ message: "Tu ya posees una cuenta" });
  }
};

const loginWithUser = async (req, res) => {
  if (
    !Object.values(req.body).every((value) => value !== "") ||
    Object.keys(req.body).length === 0
  ) {
    return res.status(404).json({ message: "Todos los campos son requeridos" });
  }

  const email = req.body.email.toLowerCase().trim();
  const password = req.body.password;

  const user = await User.findOne({ email });

  const correctPassword =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!correctPassword || !user) {
    return res.status(401).json({
      message: "No posees los permisos suficientes",
    });
  }

  const userToken = {
    id: user._id,
    email: user.email,
  };

  const token = jwt.sign(userToken, "123456789");

  res.status(200).json({
    token,
    username: user.username,
  });
};

module.exports = {
  createUser,
  loginWithUser,
};
