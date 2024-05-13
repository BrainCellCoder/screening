// // controllers/patientController.js
// const Patient = require('../model/patient');

// async function addPatient(req, res) {
//   try {
//     const patientData = req.body;
//     console.log(patientData);
//     const result = await Patient.addPatient(patientData);
//     res.json({ success: true, message: 'Patient added successfully', rowsAffected: result });
//   } catch (error) {
//     console.error('Error adding patient:', error);
//     res.status(500).json({ success: false, message: 'An error occurred while adding patient' });
//   }
// }

// module.exports = {
//   addPatient,
// };

const Patient = require('../model/patient');

async function addPatients(req, res) {
  try {
    const patientDataArray = req.body; // Assuming req.body is an array of patient objects
    console.log(patientDataArray);
    const results = await Patient.addPatients(patientDataArray);
    const totalRowsAffected = results.reduce((total, rowsAffected) => total + rowsAffected, 0);
    res.json({ success: true, message: 'Patients added successfully', totalRowsAffected });
  } catch (error) {
    console.error('Error adding patients:', error);
    res.status(500).json({ success: false, message: 'An error occurred while adding patients' });
  }
}

module.exports = {
  addPatients, // Update the exported function name to addPatients
};

