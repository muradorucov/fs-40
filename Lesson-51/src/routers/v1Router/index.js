const express = require('express');
const v1Router = express.Router();
v1Router.use("/about", aboutRouter)
v1Router.use("/contact", contactRouter)

module.exports = v1Router;