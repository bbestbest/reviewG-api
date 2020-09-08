CREATE DATABASE IF NOT EXISTS `reviewGDB`;

USE `reviewGDB`;

DROP TABLE IF EXISTS `Reviews`;
DROP TABLE IF EXISTS `Comments`;
DROP TABLE IF EXISTS `User_scores`;
DROP TABLE IF EXISTS `Admin_Accounts`;
DROP TABLE IF EXISTS `Accounts`;

CREATE TABLE `Accounts`(
    `account_id` INT(5) AUTO_INCREMENT ,
    `username` VARCHAR(30) NOT NULL ,
    `password` VARCHAR(30) NOT NULL ,
    `email` VARCHAR(30) NOT NULL UNIQUE,

    PRIMARY KEY(`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Admins`(
    `admin_id` INT(5) AUTO_INCREMENT ,
    `username` VARCHAR(30) NOT NULL ,
    `password` VARCHAR(30) NOT NULL ,
    `email` VARCHAR(30) NOT NULL ,

    PRIMARY KEY(`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Comments`(
    `comment_id` INT(5) AUTO_INCREMENT,
    `comment` VARCHAR(255) ,
    `comment_date` TIMESTAMP NOT NULL,

    PRIMARY KEY(`comment_id`)
    CONSTRAINT `account_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `Accounts`.`account_id`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;


CREATE TABLE `User_Scores`(
    `user_score_id` INT(5) AUTO_INCREMENT ,
    `score` INT (1) ,

    PRIMARY KEY(`user_score_id`)
    CONSTRAINT `account_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `Accounts`.`account_id`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Admin_Scores`(
    `admin_score_id` INT(5) AUTO_INCREMENT ,
    `story` INT (1) ,
    `gameplay` INT (1) ,
    `performance` INT (1) ,
    `graphic` INT (1) ,
    `overrall` INT (1) ,

    PRIMARY KEY(`admin_score_id`)
    CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `Admins`(`admin_id`),
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Reviews` (
    `review_id` INT(5) AUTO_INCREMENT ,
    `topic` VARCHAR(50) ,
    `body` VARCHAR(255) ,
    `writer` VARCHAR(30) ,
    `admin_score` INT(1) ,
    `user_score` INT(1) ,
    `review_comment` VARCHAR(255) ,

    PRIMARY KEY(`review_id`)
    CONSTRAINT `admin_score_ibfk_1` FOREIGN KEY (`admin_score_id`) REFERENCES `Admin_Scores`.`admin_score_id`,
    CONSTRAINT `admin_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `Admins`.`admin_id`,
    CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `Comments`.`comment_id`,
    CONSTRAINT `user_score_ibfk_1` FOREIGN KEY (`user_score_id`) REFERENCES `User_Scores`.`user_score_id`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

