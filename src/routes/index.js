const express   = require('express');
const router       = express.Router();

router.get('/', (req, res) => {
    res.json({
        status:"ok",
        message:"climbing_gym api"
    });
});

router.use('/usuarios'  , require('./usuarioRoutes'));

module.exports= router;