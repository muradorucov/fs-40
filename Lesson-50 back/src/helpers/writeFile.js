const fs = require("fs");
const readFileHelper = require("./readFile");

const writeFileHelper = (newData, dbName) => {
  const allData = readFileHelper();
  allData[dbName] = newData
  fs.writeFileSync(`./src/db/data.json`, JSON.stringify(allData, null, 2))
}


module.exports = writeFileHelper