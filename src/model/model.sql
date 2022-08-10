CREATE DATABASE restaurants;

CREATE TABLE cotegoies (
    cot_id serial not null primary key,
    cot_name varchar(32) not null,
    res_img text
);

INSERT INTO cotegoies(cot_name) VALUES ('fast food'), ('miliy taomlar')

CREATE TABLE restaurants (
    res_id serial not null primary key,
    res_name varchar(32) not null,
    res_cotegory_id int not null,
    res_img text
);

INSERT INTO restaurants(res_name, res_cotegory_id) VALUES('oq tepa lavash', 1), ('Rayhon', 2);

CREATE TABLE products (
    product_id serial not null primary key,
    product_name varchar(32) not null,
    product_price int not null,
    product_img text,
    res_id int not null,
    FOREIGN KEY(res_id) REFERENCES restaurants(res_id) ON DELETE CASCADE
);

INSERT INTO products(product_name, product_price, res_id) VALUES('lavash', '22 000', 1);    



CREATE TABLE orders (
    order_id serial not null PRIMARY KEY,
    order_name text not null,
    ordered_user_name text not null,
    ordered_user_number varchar(64) not null,
    ordered_user_location varchar(64) not null,
    ordered_time timestamptz DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE users (
    user_id serial not null PRIMARY KEY,
    user_name varchar(16) not null,
    user_password varchar(16) not null
);




SELECT 
    
    *
FROM 
    orders o
NATURAL JOIN products p
NATURAL JOIN users u
WHERE p.product_id = o.product_id and u.user_id = o.user_id
ORDER BY u.user_id
