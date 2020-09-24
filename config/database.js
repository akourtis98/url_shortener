require("dotenv").config();
const { Sequelize } = require("sequelize");
var queries = require("./queries");

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_DATABASE;

const db = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

async function getUrls() {
  const [results, metadata] = await db.query(queries.SELECTALLURLS);
  return results;
}

async function addUrl(fullUrl, shortUrl) {
  return new Promise((resolve, reject) => {
    db.query(queries.ADDNEWURL, [fullUrl, shortUrl], (err, result) => {
      if (err) reject(err);
      res = JSON.parse(JSON.stringify(result));
      resolve(res);
    });
  });
}

module.exports = {
  db,
  addUrl,
  getUrls,
};
