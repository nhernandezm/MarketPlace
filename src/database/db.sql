CREATE DATABASE marketplace;

USE marketplace;

CREATE TABLE category(
    id INT(10) AUTO_INCREMENT NOT NULL,
    code VARCHAR(20) NOT NULL,
    primary key(id)
);

CREATE TABLE product(
    id INT(10) AUTO_INCREMENT NOT NULL,
    code VARCHAR(20) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(300) NOT NULL,
    amount INT(10) UNSIGNED NOT NULL,
    urlImage VARCHAR(500) NULL,
    idCategory INT(10) NOT NULL,
    primary key(id)
);

ALTER TABLE product add foreign key(idCategory) references category(id);