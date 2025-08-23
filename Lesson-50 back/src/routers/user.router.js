const express = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  getSingleUser,
  deleteUser,
  changeStatus
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", getAllUser)
userRouter.post("/", createUser)
userRouter.put("/:id", updateUser)
userRouter.get("/:id", getSingleUser)
userRouter.patch("/:id/status", changeStatus)
userRouter.delete("/:id", deleteUser)


module.exports = userRouter