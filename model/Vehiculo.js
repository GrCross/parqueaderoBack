const mongoose = require("mongoose");

const vehiculoSchema = mongoose.Schema({
    identifier: {
        type:Number,
        required:true
    },
    placa: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    
    tipoVehiculo: {
        type: String,
        required: true
    },
    horaIngreso: {
        type: String,
        require
    },
    horaSalida: {
        type: String,
        default: null
    },
    totalPago:{
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('vehiculo',vehiculoSchema);