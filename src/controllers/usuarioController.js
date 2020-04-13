const usuarioModel = require('../models/usuarioModel');
var usuarioController = {};

usuarioController.getUsuarios =  async (req, res) => {
    const usuarios = await usuarioModel.getUsuarios();
    res.json({
        status:"ok",
        message:"usuarios",
        data:usuarios
    });
};

usuarioController.registrarAlumno = (req,res) => {
    console.log(req.body);
    const body=req.body;
    res.json({
        status:"ok",
        body
    });
};
module.exports=usuarioController;