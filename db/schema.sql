### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


DELETE FROM burgers WHERE id = 42;

UPDATE burgers SET devoured=true WHERE id=26;

SELECT * FROM burgers;