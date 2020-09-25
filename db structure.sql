DROP TABLE IF EXISTS `url`;
CREATE TABLE `url` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullUrl` varchar(255) NOT NULL,
  `shortUrl` varchar(255) NOT NULL,
  `created` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;