# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.20)
# Database: quora
# Generation Time: 2017-11-20 18:06:58 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table comments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;

INSERT INTO `comments` (`id`, `comment`, `question_id`, `created_at`, `updated_at`)
VALUES
	(1,'IDK',1,'2017-11-12 15:19:58','2017-11-12 15:19:58'),
	(2,'1',1,'2017-11-12 15:25:54','2017-11-12 15:25:54'),
	(3,'2',1,'2017-11-12 15:25:56','2017-11-12 15:25:56'),
	(4,'3',1,'2017-11-12 15:25:58','2017-11-12 15:25:58'),
	(5,'4',1,'2017-11-12 15:26:00','2017-11-12 15:26:00'),
	(6,'gr',1,'2017-11-12 15:33:22','2017-11-12 15:33:22'),
	(7,'scks',1,'2017-11-12 15:33:36','2017-11-12 15:33:36'),
	(8,'Hey',1,'2017-11-12 15:34:02','2017-11-12 15:34:02'),
	(9,'hj',1,'2017-11-12 15:34:06','2017-11-12 15:34:06'),
	(10,'Shubhang',2,'2017-11-12 15:35:31','2017-11-12 15:35:31'),
	(11,'SCAM SCAM',2,'2017-11-12 15:35:41','2017-11-12 15:35:41'),
	(12,'hey',1,'2017-11-12 17:06:48','2017-11-12 17:06:48'),
	(13,'Comment 1',7,'2017-11-13 05:18:54','2017-11-13 05:18:54'),
	(14,'Hey',7,'2017-11-13 06:02:17','2017-11-13 06:02:17');

/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table migrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;

INSERT INTO `migrations` (`id`, `migration`, `batch`)
VALUES
	(1,'2014_10_12_000000_create_users_table',1),
	(2,'2014_10_12_100000_create_password_resets_table',1),
	(3,'2017_11_05_140936_create_questions_table',1),
	(4,'2017_11_12_144858_create_comments_table',1);

/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table password_resets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `sno` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` text COLLATE utf8mb4_unicode_ci,
  `star` int(11) NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `topic` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;

INSERT INTO `questions` (`sno`, `question`, `answer`, `star`, `location`, `topic`, `created_at`, `updated_at`)
VALUES
	(7,'What are some lesser-known facts about movie stars?','Back in March of 2001, Rowan Atkinson was on a private plane trip to Kenya with his family when their pilot suddenly collapsed mid-flight.\n\nAtkinson and his family made attempts to revive the pilot, but when all else failed, he was forced to take over the controls, saving his wife and family.\n\nKeep in mind he was 46. He had never piloted a plane before.\n\nAfter a few slaps from Atkinson, the pilot eventually came back to consciousness and landed the plane back to safety. The story was reported on several media outlets.',0,'Delhi',0,NULL,NULL),
	(8,'What are some of the most underrated Indian movies?','The Ghazi Attack\n\nThis movie released earlier this year in three Indian languages,shot as a bilingual and dubbed into another.\n\nClaimed to be India\'s first submarine based war film,this movie was a brave attempt amongst the kind of genres , we were actually used to. Also,the other important factor is that this movie was based on the true incidents that happened during the Indo-Pakistan war of 1971 with some fictional elements added to it.\n\nThe story is about the attack of the Pakistani submarine, Ghazi , and how the Indian submarine S21 defended the city of Visakhapatnam, in the process of also defending itself,during the Indo - Pakistan war or to be honest,this incident is said to have actually triggered the Indo-Pak war of 1971.\n\nWhat starts as a search mission,turns out to be a duel between the submarines,unfortunately.',0,'Gujrat',0,NULL,NULL),
	(9,'What is something that Hollywood always gets wrong?','They get a lot of facts wrong. But the one I am familiar with is - cultural stereotyping.\n\nIndians in movies are always some Punjabi family wearing their turban and doing some lavish weddings.\nIndians in USA are very conservative that the women of the house only wear saree or salwar even to night clubs.\nWe, Indians, always have a distinct Eastern accent of English. Like “heai ow aaar you doingg”. Most Indians in the USA have a good American accent. tbh.\nAlways showing India as a country with only crowded streets or focussing on Rajasthan. Hello Hollywood, time to show south India too!\nIndians always own a grocery store thanks to the Simpsons. We are also engineers in America.\nThere is always a Punjabi guy mistaken as a terrorist. Widen your horizon Hollywood directors!\nWe always live in Asian communities.',0,'',0,NULL,NULL),
	(10,'What are the best Data Analytics courses in India with placement assistance?','Dear Aman,\n\nThere are many good institutes in India, who are offering Business Analytics, Data science program. Many of them have good placement assistance as well.\n\nBut before shortlisting any institute one should do some analysis to find out which one will be the best for you.\n\nFirst thing what you should do, set up your objective. By objective I mean what exactly you want to learn. Whether you want to learn specific technology or you want to do a holistic data science program.\n\nFor this you need to understand the demand in the market for different jobs in this sector. For example if you want to go for a data science program, then you should understand which type of data science program are actually available in India.',0,'',1,NULL,NULL);

/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
