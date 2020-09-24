const { Sequelize } = require("sequelize");
const shortId = require("shortid");
const { db } = require("../config/database.js");

const shortUrlSchema = db.define("url", {
  fullUrl: {
    type: Sequelize.STRING,
    required: true,
  },
  shortUrl: {
    type: Sequelize.STRING,
    required: true,
    default: shortId.generate,
  },
});

module.exports = shortUrlSchema;
