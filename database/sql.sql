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

INSERT INTO datosPersonas VALUES (default,'krizia', '123456789', 'la-mama'),
(default,'oscar', '123456789', 'papa'),
(default,'pep', '123456789', 'mihijo'),
(default,'adrian', '123456789', 'mihijo');
