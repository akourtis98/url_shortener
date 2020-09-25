require("dotenv").config();
var queries = require("./queries");
const mysql = require("mysql");

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_DATABASE;

const con = mysql.createConnection({
  host,
  user,
  password,
  database,
});

const connectToDB = () => {
  con.connect(function (err) {
    if (err) throw err;
  });
};

async function getUrls() {
  return new Promise((resolve, reject) => {
    con.query(queries.SELECTALLURLS, (err, result) => {
      if (err) throw err;
      res = JSON.parse(JSON.stringify(result));
      resolve(res);
    });
  });
}

async function getUrl(shortUrl) {
  return new Promise((resolve, reject) => {
    con.query(queries.FINDURL, [shortUrl], (err, result) => {
      if (err) throw err;
      res = JSON.parse(JSON.stringify(result));
      resolve(res);
    });
  });
}

async function getFullUrlByShortUrl(shortUrl) {
  return new Promise((resolve, reject) => {
    con.query(queries.FINDFULLURL, [shortUrl], async (err, result) => {
      if (err) throw err;
      res = JSON.parse(JSON.stringify(result));
      const fullUrl = res[0].fullUrl;
      resolve(fullUrl);
    });
  });
}

async function deleteById(id) {
  return new Promise((resolve, reject) => {
    con.query(queries.DELETEBYID, [id], async (err, result) => {
      if (err) throw err;
      resolve;
    });
  });
}

async function addUrl(fullUrl, shortUrl, created) {
  return new Promise((resolve, reject) => {
    con.query(
      queries.ADDNEWURL,
      [fullUrl, shortUrl, created],
      (err, result) => {
        if (err) throw err;
        res = JSON.parse(JSON.stringify(result));
        resolve(res);
      }
    );
  });
}

module.exports = {
  connectToDB,
  addUrl,
  getUrl,
  getUrls,
  getFullUrlByShortUrl,
  deleteById,
};
