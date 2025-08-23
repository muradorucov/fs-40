const express = require('express');
const router = require('./src/routers');
const app = express();
require('dotenv').config()
const port = process.env.PORT;

app.use(express.json());
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
