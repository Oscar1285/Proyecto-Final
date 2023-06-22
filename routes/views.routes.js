const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');


function obtenerEmailDelUsuarioActual() {
    const email = localStorage.getItem('usuarioActual');
  
  // Devolver el correo electrónico del usuario autenticado
  return email;
  }

router.use(express.json());
router.use(cors());
router.use(express.static('public'));

// Establecemos los parámetros de conexión
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'usuariosSchrodi'
});

conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("¡Conexión exitosa a la base de datos!");
  }
});

router.get("/", (req, res) => {
  res.render("indexregistrate");
});

router.get("/indexcontrasenya", (req, res) => {
  res.render("indexcontrasenya");
});

router.get('/indexsesion', (req, res) => {
  const showError = req.query.error === '1';
  res.render('indexsesion', { showError });
});

router.get("/sesioniniciada", (req, res) => {
  res.render("sesioniniciada", { showError: false });
});

// Mostrar todos los usuarios
router.get('/api/usuarios', (req, res) => {
  conexion.query('SELECT * FROM datosPersonas', (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

// Crear un usuario
router.post('/api/usuarios', (req, res) => {
  let data = { email: req.body.email, contrasenya: req.body.contrasenya, nickname: req.body.nickname };
  let sql = "INSERT INTO datosPersonas SET ?";
  conexion.query(sql, data, function (err, result) {
    if (err) {
      throw err;
    } else {
      Object.assign(data, { id: result.insertId });
      res.send(data);
    }
  });
});

// Ruta para procesar el inicio de sesión
router.post('/login', (req, res) => {
    
  const email = req.body.email;
  const password = req.body.contrasenya;
  

  // Realiza la lógica de autenticación y verifica si el usuario y la contraseña son válidos
  conexion.query('SELECT * FROM datosPersonas WHERE email = ? AND contrasenya = ? LIMIT 1', [email, password], (error, filas) => {
    if (error) {
      throw error;
    } else {
      if (filas.length > 0) {
        const usuario = filas[0]; // Obtener el primer usuario encontrado
        req.session.user = {
          id: usuario.id,
          email: usuario.email,
          contrasenya: usuario.contrasenya,
          nickname: usuario.nickname
        };
        res.redirect('/sesioniniciada');
      } else {
        // Si el inicio de sesión no es exitoso, redirige a la página de inicio de sesión o muestra un mensaje de error
         res.render("sesioniniciada", { loggedInEmail: req.session.user.email, showError: false });
      }
    }
  });
});

module.exports = router;