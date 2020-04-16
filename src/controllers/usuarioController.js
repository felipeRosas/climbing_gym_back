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

usuarioController.create = async (req,res) => {
    const usuario = req.body;
    const result  = await usuarioModel.createUsuario(usuario);
    if(result){
        
        return res.status(201).json({
            status:"ok",
            message:"operacion exitosa",
            result
        });
    }
};

usuarioController.getUsuario = async (req, res) => {
    const { usuarioId } = req.params;
    const usuario       = await usuarioModel.getUsuario(usuarioId);
    if(usuario){
        return res.json({
            status:"ok",
            message:"operacion exitosa",
            usuario
        });
    }
};

usuarioController.update = async (req, res) => {
    const usuario = req.body;
    const result  = await usuarioModel.updateUsuario(usuario);
    if(result){
        return res.json({
            status:"ok",
            message:"operacion exitosa",
            result
        });
    }
};

usuarioController.delete = async (req, res) => {
    const {usuarioId} = req.body;
    const result = await usuarioModel.deleteUsuario(usuarioId);
    if(result){
        return res.json({
            status:"ok",
            message:"operacion exitosa",
            result
        });
    }
};
module.exports=usuarioController;