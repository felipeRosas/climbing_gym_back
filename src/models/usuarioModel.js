const pool = require('../database');
var usuarioModel={};

usuarioModel.createUsuario = (usuario) => {
    const {nombre, apellidoP, apellidoM, fechaN, email, password, telefono, rut,tipoUsuario} = usuario;
    return new Promise( (resolve, reject) => {
        pool.query(`call sp_createUsuario('${nombre}','${apellidoP}','${apellidoM}','${fechaN}',${telefono},
        '${email}','${rut}','${password}', ${tipoUsuario})`, (err, result) => {
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

usuarioModel.getUsuario = (usuarioId) => {
    return new Promise( (resolve, reject) => {
        pool.query(`call sp_getUsuario(${usuarioId})`, (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result[0]);
            }
        });
    } );
};

usuarioModel.updateUsuario = (usuario) => {
    const {nombre, apellidoP, apellidoM, fechaN, email, telefono, rut, usuarioId} = usuario;
    return new Promise( (resolve, reject) => {
        pool.query(`call sp_updateUsuario('${nombre}','${apellidoP}','${apellidoM}','${fechaN}',${telefono},
        '${email}','${rut}', ${usuarioId})`, (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result);
            }
        });
    });
};

usuarioModel.deleteUsuario = (usuarioId) => {
    return new Promise( (resolve, reject) => {
        pool.query(`call sp_deleteUsuario(${usuarioId})`, (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result);
            }
        });
    } );
};

module.exports=usuarioModel;