const Router = require("express");
const router = new Router();

router.get('/api/usuarios', (req,res)=>{
    conexion.query('SELECT * FROM datosPersonas', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

// Crear un usuario
router.post('/api/usuarios', (req,res)=>{
    let data = {email:req.body.email, contrasenya:req.body.contrasenya, nickname:req.body.nickname};
    let sql = "INSERT INTO datosPersonas SET ?";
    conexion.query(sql, data, function(err, result){
        if(err){
            throw err;
        }else{
            Object.assign(data, {id: result.insertId });
            res.send(data);
        }
    });
});


module.exports = router;
