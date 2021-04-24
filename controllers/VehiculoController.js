const express = require('express');
const Vehiculo = require('../model/Vehiculo');

const router = express.Router();

//Obtener todos los ingresos de todos los vehiculos
router.get('/', async(req,res) => {
    try {
        const vehiculos = await Vehiculo.find();
        res.json(vehiculos);
    } catch (err) {
        res.json(err);
    }
});

//Registrar un vehiculo 
router.post('/', async (req,res) =>{
    

    const vehiculo = new Vehiculo({
        identifier: req.body.identifier,
        placa: req.body.placa,
        marca: req.body.marca,
        color: req.body.color,
        tipoVehiculo: req.body.tipoVehiculo,
        horaIngreso: req.body.horaIngreso,
        totalPago: req.body.totalPago
    });
    try{
        const savedVehiculo = await vehiculo.save();
        res.json(savedVehiculo);
    }catch(err){
        res.json(err);
    }    
} );

//Actualizar la hora de salida de un vehiculo a una especifica hora
router.patch('/:identifier', async(req,res) => {
    try {
        const vehiculo = await Vehiculo.updateOne({
            identifier: req.params.identifier
        },
        {   totalPago: req.body.totalPago,
            horaSalida: req.body.horaSalida        
        })

        
        res.json(vehiculo);
    } catch (err) {
        
        res.json(err);
    }
});




module.exports = router;