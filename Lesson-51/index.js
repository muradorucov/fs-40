const express = require("express");
const config = require("./src/config");
const router = require("./src/routers");
const app = express();

app.use("/api", router)

app.listen(config.port, () => {
  console.log(`Server is running`);
});