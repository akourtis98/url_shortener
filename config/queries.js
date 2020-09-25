module.exports = {
  SELECTALLURLS: "SELECT * FROM new_schema.url",
  ADDNEWURL:
    "INSERT INTO `new_schema`.`url` (`fullUrl`, `shortUrl`, `created`) VALUES (?, ?, ?)",
  FINDURL: "SELECT fullUrl FROM new_schema.url WHERE `shortUrl` LIKE ?",
  FINDFULLURL: "SELECT fullUrl FROM new_schema.url WHERE `shortUrl` LIKE ?",
  DELETEBYID: "DELETE FROM `new_schema`.`url` WHERE (`id` = ?);",
};
