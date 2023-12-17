const express = require('express');
const mongooseConnection = require('./db');
const userRoutes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});