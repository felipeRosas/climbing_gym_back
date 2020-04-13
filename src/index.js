const express   = require('express');
const morgan    = require('morgan');
const bodyParser= require('body-parser');
const cors = require('cors');
//variables de entorno
require('dotenv').config();


const app       = express();


app.use(cors());
//configuraciones
app.set('port', process.env.PORT || 3030);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));


//middlewares
app.use(morgan('dev'));


//routes
app.use('/api', require('./routes'));

//iniciar servidor
app.listen(app.get('port'), () => {
    console.log("server en puerto "+ app.get('port'));
});
