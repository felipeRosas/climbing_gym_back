const express   = require('express');
const router       = express.Router();
const usuarioController = require('../controllers/usuarioController');


router.get('/', usuarioController.getUsuarios);
router.post('/inscripciones', usuarioController.registrarAlumno);

module.exports= router;