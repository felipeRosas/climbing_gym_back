const express           = require('express');
const router            = express.Router();
const validaciones      = require('../lib/validate');
const usuarioController = require('../controllers/usuarioController');


router.get('/'                  , usuarioController.getUsuarios);
router.post('/inscripcion'      , validaciones.validar(validaciones.validarUsuarioNuevo) , usuarioController.create);
router.get('/perfil/:usuarioId' , usuarioController.getUsuario);
router.post('/actualizardatos'  , validaciones.validar(validaciones.validarUsuarioUpdate), usuarioController.update);
router.post('/eliminar'         , usuarioController.delete);
//manejar errores de validate
router.use( (error, req, res, next) => {
    res.status(400).json({
        status  :"error",
        message :error.message
    });
});

module.exports= router;