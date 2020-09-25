const express = require("express");
const app = express();
const shortId = require("shortid");
const {
  connectToDB,
  getUrls,
  addUrl,
  getUrl,
  getFullUrlByShortUrl,
  deleteById,
} = require("./config/database");

connectToDB();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", async (req, res) => {
  const shortUrls = await getUrls();
  res.render("index", { urls: shortUrls });
});

app.get("/get/:shorturl", async (req, res) => {
  const fullUrl = await getUrl(req.params.shorturl);
  res.render("index", { urls: fullUrl });
});

app.post("/add/url", async (req, res) => {
  // no models
  const fullUrl = req.body.fullUrl;
  const shortUrl = shortId.generate();
  const created = new Date().toISOString().slice(0, 10);

  await addUrl(fullUrl, shortUrl, created);

  res.redirect("/");
});

app.delete("/delete/:id", async (req, res) => {
  await deleteById(req.params.id);
  res.redirect(url);
});

app.get("/:shorturl", async (req, res) => {
  const url = await getFullUrlByShortUrl(req.params.shorturl);
  res.redirect(url);
});

app.listen(process.env.PORT || 5000);
