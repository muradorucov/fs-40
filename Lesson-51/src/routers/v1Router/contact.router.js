const express = require('express');
const contactRouter = express.Router();

contactRouter.get('/');
contactRouter.post('/');
contactRouter.patch('/');
contactRouter.delete('/');

module.exports = contactRouter;
