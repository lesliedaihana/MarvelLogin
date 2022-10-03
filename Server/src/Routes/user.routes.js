const userRouter = require("express").Router();
const { createUser, loginWithUser } = require("../Controllers/users");

userRouter.post("/signup", createUser).post("/signin", loginWithUser);

module.exports = userRouter;
