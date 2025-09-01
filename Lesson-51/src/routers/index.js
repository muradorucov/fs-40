const express = require('express');
const v1Router = require('./v1Router');
const router = express.Router();


router.use("/v1", v1Router)



module.exports = router;