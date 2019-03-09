CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(200) NOT NULL,
department_name VARCHAR (200) NOT NULL,
price INT (100) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toaster oven", "appliances", 40, 10),
("vacuum", "appliances", 80, 15),
("paddleboard", "sports", 300, 8),
("surf board", "sports", 200, 5),
("tea","food", 2, 1000),
("sugar", "food", 4, 500),
("soap", "supplies", 3, 100),
("razor", "supplies", 8, 70),
("couch", "furniture", 400, 10),
("coffee table", "furniture", 250, 5);

SELECT * FROM products;