const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
app.use(express.json())
require('dotenv/config');
const vehiculoController = require('./controllers/VehiculoController');
app.use(cors());




//Uso del controlador de vehiculos
app.use('/parqueadero/vehiculo',vehiculoController);




mongoose.
connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('mongoDB connected'));

app.listen(3000);