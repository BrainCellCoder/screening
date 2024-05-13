const express = require('express');
const app = express();
const patientRoutes = require('./route/patientRoute');
const { connect } = require('./model/db');

//SQL Server
connect();
app.use(express.json());

app.use('/patients', patientRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});