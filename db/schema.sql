### Schema

CREATE DATABASE bakeoff_db;
USE bakeoff_db;

CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	productCat varchar(255) NOT NULL,
	productName varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
