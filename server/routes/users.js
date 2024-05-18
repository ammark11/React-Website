const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send({ error: 'Error creating user' });
  }
});

// More CRUD endpoints here

module.exports = router;