const express = require("express");
const userRouter = require("./user.router");
// const postRouter = require("./post.router");

const router = express.Router()

router.use("/users", userRouter)
// router.use("/posts", postRouter)


module.exports = router