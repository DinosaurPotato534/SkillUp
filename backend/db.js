const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://shaany0418:3238340@skillup.z3dh8pu.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Atlas connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas!');
});

module.exports = db;
