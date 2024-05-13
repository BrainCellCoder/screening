// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controller/patientController');

router.post('/add', patientController.addPatients); // Change the function to addPatients

module.exports = router;
