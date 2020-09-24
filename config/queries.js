module.exports = {
  SELECTALLURLS: "SELECT * FROM new_schema.url",
  ADDNEWURL:
    "INSERT INTO `new_schema`.`url` (`fullUrl`, `shortUrl`) VALUES (?, ?)",
};
