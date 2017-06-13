CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY, 
  text text, 
  roomname varchar(10),
  FOREIGN KEY(username) REFERENCES usernames(id)
);

CREATE TABLE usernames (
  id INTEGER PRIMARY KEY,
  name varchar(20)
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

