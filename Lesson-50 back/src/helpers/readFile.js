const fs = require('fs');

const readFileHelper = (dbName = "all") => {
  const data = JSON.parse(fs.readFileSync(`./src/db/data.json`));
  return dbName === "all" ? data : data[dbName]
}


module.exports = readFileHelper;