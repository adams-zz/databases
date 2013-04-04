CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int not null AUTO_INCREMENT,
  PRIMARY KEY (id),
  username varchar(255) default "Guest",
  createdat timestamp
);

CREATE TABLE messages (
  id int not null AUTO_INCREMENT,
  PRIMARY KEY (id),
  user_id int NOT NULL,
  text varchar(255),
  room_id int NOT NULL,
  createdat timestamp
);

CREATE TABLE rooms (
  id int not null AUTO_INCREMENT,
  PRIMARY Key (id),
  roomname varchar(255),
  createdat timestamp
);

CREATE TABLE megatesttable (
  id int not null AUTO_INCREMENT,
  PRIMARY Key (id),
  username varchar(255) default "Guest",
  text varchar(255),
  roomname varchar(255),
  createdat timestamp
);

INSERT INTO megatesttable (username, text, roomname) VALUES ("Mike", "This is a megatest!", "Bar");
INSERT INTO megatesttable (username, text, roomname) VALUES ("Bob", "This is a a!", "Bar");

INSERT INTO users (username) VALUES ("MIKE");
INSERT INTO users (username) VALUES ("NODERUS");
INSERT INTO users (username) VALUES (default);

INSERT INTO rooms (roomname) VALUES ("Awesomeness");
INSERT INTO rooms (roomname) VALUES ("Lame");

INSERT INTO messages (user_id, text, room_id) VALUES (1, "This is the first message in the world",1);
INSERT INTO messages (user_id, text, room_id) VALUES (2, "This is the second message in the world",2);
INSERT INTO messages (user_id, text, room_id) VALUES (1, "This is the third message in the world",2);

select * from users;
select * from messages;
select * from rooms;

-- ALTER TABLE messages
-- ADD CONSTRAINT FK_messages
-- FOREIGN KEY (user_id) REFERENCES users(id)

-- CREATE DATABASE twitter;

-- USE twitter;

-- CREATE TABLE users (
--   id int not null AUTO_INCREMENT,
--   PRIMARY KEY(id),
--   name varchar(255),
--   username varchar(255),
--   createdate timestamp default current_timestamp
-- );

-- CREATE TABLE tweets (
--   id int not null AUTO_INCREMENT,
--   PRIMARY KEY(id),
--   user_id int,
--   message varchar(255),
--   createdate timestamp default current_timestamp

-- );

-- INSERT INTO users (name, username) values ('Mike Adams', 'mgadams3');
-- INSERT INTO users (name, username) values ('Hack Reactor', 'hackreactor');
-- INSERT INTO users (name, username) values ('Catalyst Class', 'catalystclassSF');

-- INSERT INTO tweets (user_id, message) values (1, "I'm a boss yo!");
-- INSERT INTO tweets (user_id, message) values (2, "I'm a pepper yo!");
-- INSERT INTO tweets (user_id, message) values (2, "I'm a class yo!");
-- INSERT INTO tweets (user_id, message) values (3, "I'm a gansta yo!");

-- select * from users, tweets where users.id=tweets.user_id;


/*  Execute this file from the command line by typing:
 *    mysql < schema.sql   
 *  to create the database and the tables.*/