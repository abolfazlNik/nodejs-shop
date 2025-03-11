DROP TABLE IF EXISTS cart_product;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS category;

create table category (
    id serial primary key,
    name text not null unique
);

create table product (
    id serial primary key,
    name text not null,
    description text not null,
    category_id int references category(id),
    price decimal not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz
);

create table customer (
    id serial primary key,
    name text not null,
    lastname text not null,
    email text not null,
    password text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz
);

create table cart (
    id serial primary key,
    customer_id int not null references customer(id),
    created_at timestamptz not null default now(),
    updated_at timestamptz
);

create table cart_product (
    id serial primary key,
    cart_id int not null references cart(id),
    product_id int not null references product(id),
    quantity int not null
);

insert into category(name) values ('Laptop'), ('Clothing'), ('Books');

insert into product(name, description, price, category_id) 
values
('MacBook Pro', 'Apple laptop', 1500.0, 1),
('T-shirt', 'Nike T-shirt', 25.0, 2),
('Comedy Book', 'Funny book', 15.0, 3);

insert into customer(name, lastname, email, password) 
values
('customer1', 'lastname 1', 'A@a.com', '123'),
('customer2', 'lastname 2', 'B@b.com', '234');

insert into cart(customer_id) values (1),(2);

insert into cart_product(cart_id, product_id, quantity) 
values 
(1, 1, 2),
(1, 2, 3),
(2, 1, 5),
(2, 2, 8);