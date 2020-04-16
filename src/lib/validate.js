const yup   = require('yup');

const validaciones = {};

validaciones.validar = (validacion) => {
    return (req, res, next) => {
        try {
            validacion(req.body);
            next();
        } catch (error) {
            next(error);
        }
    };
};


validaciones.validarUsuarioNuevo = (data) => {
    const schemaUsuario = yup.object().shape({
        nombre      : yup.string().min(3).required(),
        apellidoP   : yup.string().min(3).required(),
        apellidoM   : yup.string().min(3).required(),
        fechaN      : yup.date().required(),
        email       : yup.string().email().required(),
        password    : yup.string().min(6).required(),
        telefono    : yup.number().required(),
        rut         : yup.string().required()

    });

    schemaUsuario.validateSync(data);
}
validaciones.validarUsuarioUpdate = (data) => {
    const schemaUsuario = yup.object().shape({
        nombre      : yup.string().min(3).required(),
        apellidoP   : yup.string().min(3).required(),
        apellidoM   : yup.string().min(3).required(),
        fechaN      : yup.date().required(),
        email       : yup.string().email().required(),
        telefono    : yup.number().required(),
        rut         : yup.string().required()

    });

    schemaUsuario.validateSync(data);
}

module.exports = validaciones;