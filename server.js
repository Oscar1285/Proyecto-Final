// IMPORTS
// IMPORTS
const express = require('express');
const db_connection = require('./database/connection.js');
const viewRoutes = require('./routes/views.routes.js');
const apiRoutes = require('./routes/api.routes.js');
// Creamos un objeto "app" a través del módulo (clase) de express
const app = express();

const url = "http://localhost:3000/api/usuarios/";

// CONFIGS
app.set('view engine', 'ejs'); // Configuramos EJS como el motor de plantillas predeterminado
app.set('views', __dirname + '/views');
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(viewRoutes, apiRoutes);

const mysql = require('mysql');
const cors = require('cors');
const { json } = require('express')



// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

