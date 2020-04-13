const pool = require('../database');
var usuarioModel={};

usuarioModel.insertUsuario = (usuario) => {
    const {nombre, apellidoP, apellidoM, fechaN, email, password, telefono, rut} = usuario;
    return new Promise( (resolve, reject) => {
        pool.query(`insert into usuarios(nombre,apellidoP,apellidoM,rut,email,telefono, password, tipoUsuario_id,fechaNacimiento)
        values();`, (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result[0]);
            }
        });
    });
};

usuarioModel.getUsuarios = () => {
    return new Promise( (resolve, reject) => {
        pool.query(`select * from usuarios`, (err, result) => {
            if(err) reject(err)
            if(result){
                console.log(result);
                resolve(result);
            }
        });
    });
};

module.exports=usuarioModel;