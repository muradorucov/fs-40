require("dotenv").config();


const config = {
  port: process.env.PORT,
  origin: process.env.ORIGIN,
  mongoUri: process.env.MONGO_URI,
  mongoPassword: process.env.MONGO_PASSWORD,
  email: process.env.EMAIL,
  pass: process.env.PASS,
  host: process.env.HOST,
}

module.exports = config;