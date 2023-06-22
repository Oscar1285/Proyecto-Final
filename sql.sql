drop schema if exists usuariosSchrodi;
create schema usuariosSchrodi;
use usuariosSchrodi;

create table datosPersonas(
id int primary key auto_increment,
email varchar (255),
contrasenya varchar(30),
nickname varchar (30)
);

select * from datosPersonas;
INSERT INTO datosPersonas VALUES (default,'pollo@pollo.com', 'pollo', 'pollo')
