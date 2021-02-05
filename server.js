const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;

// Connect DB
connectDB();

app.use(express.json({ extended: false }));

// Define routes used
app.use('/api/properties', require('./routes/api/properties'));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
