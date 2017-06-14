CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT, 
  userid int NOT NULL,
  text varchar(200) NOT NULL, 
  roomname varchar(10),
  PRIMARY KEY(ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  PRIMARY KEY (ID)
);


-- var message = {
--   username: undefined,
--   text: undefined, 
--   roomname: undefined
-- };


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

