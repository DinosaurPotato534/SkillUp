const express = require('express');
const router = express.Router();
const User = require('./user');
const { v4: uuidv4 } = require('uuid');

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const uid = uuidv4();

    const newUser = new User({
      uid,
      name,
      email,
      password,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
});

module.exports = router;
