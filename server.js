const apiRoutes = require('./routes/apiRoutes');
const db = require('./db/connections');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const inputCheck = require('./utils/inputCheck');

// Express middleware:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

// test connection:
app.get('/', (req, res) => {
  res.json({
    message: 'Hello Ron!'
  });
});

// Default response for any other request (Not Found):
app.use((req, res) => {
  res.status(404).end();
});

// PORT listening:
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});