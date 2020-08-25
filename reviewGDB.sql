CREATE DATABASE IF NOT EXISTS `reviewGDB`;

USE `reviewGDB`;

DROP TABLE IF EXISTS `Reviews`;
DROP TABLE IF EXISTS `Comments`;
DROP TABLE IF EXISTS `User_scores`;
DROP TABLE IF EXISTS `Admin_Accounts`;
DROP TABLE IF EXISTS `Accounts`;

CREATE TABLE `Accounts`(
    `id` INT(5) AUTO_INCREMENT ,
    `user_username` VARCHAR(30) NOT NULL ,
    `user_password` VARCHAR(30) NOT NULL ,
    `user_email` VARCHAR(30) NOT NULL UNIQUE,

    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Admin_Accounts`(
    `id` INT(5) AUTO_INCREMENT ,
    `admin_username` VARCHAR(30) NOT NULL ,
    `admin_password` VARCHAR(30) NOT NULL ,
    `admin_email` VARCHAR(30) NOT NULL ,

    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Comments`(
    `id` INT(5) AUTO_INCREMENT,
    `comment` VARCHAR(255) ,
     `comment_date` TIMESTAMP ,

    PRIMARY KEY(`id`)
    CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`comment`) REFERENCES `Reviews`.`review_comment`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;


CREATE TABLE `User_Scores`(
    `id` INT(5) AUTO_INCREMENT ,
    `user_overrall_score` INT (1) ,

    PRIMARY KEY(`id`)
    CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_overrall_score`) REFERENCES `Reviews`.`user_score`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Admin_Scores`(
    `id` INT(5) AUTO_INCREMENT ,
    `user_overrall_score` INT (1) ,

    PRIMARY KEY(`id`)
    CONSTRAINT `user_scores_ibfk_1` FOREIGN KEY (`user_overrall_score`) REFERENCES `Reviews`.`user_score`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Reviews` (
    `id` INT(5) AUTO_INCREMENT ,
    `topic` VARCHAR(50) ,
    `body` VARCHAR(255) ,
    `writer` VARCHAR(30) ,
    `admin_score` INT(1) ,
    `user_score` INT(1) ,
    `review_comment` VARCHAR(255) ,

    PRIMARY KEY(`id`)
    CONSTRAINT `user_scores_ibfk_1` FOREIGN KEY (`user_score`) REFERENCES `User_Scores`.`user_overrall_score`,
    CONSTRAINT `admin_scores_ibfk_2` FOREIGN KEY (`admin_score`) REFERENCES `Admin_Scores`.`admin_overrall_score`,
    CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`review_comment`) REFERENCES `Comments`.`comment`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

-- UNIQUE