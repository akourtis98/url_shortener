require("dotenv").config();
const express = require("express");
const app = express();
const shortUrl = require("./models/shortUrl");

const { db, getUrls, addUrl } = require("./config/database");

db.authenticate()
  .then(() => console.log("Database connect"))
  .catch((err) => console.log("err" + err));

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", async (req, res) => {
  const shortUrls = await getUrls();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  // make new entry
  await shortUrl.create({ full: req.body.fullUrl });
  // return new url
  res.redirect("/");
});

// route for getting long link by giving short link

app.listen(
  process.env.PORT || 5000,
  console.log("server listening at port 5000")
);
