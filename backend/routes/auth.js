// routes/auth.js
const express = require('express');
const router = express.Router();

// Mock user data (In production, use a database)
const users = [];

// Register Route
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully.' });
});

// Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  res.status(200).json({ message: 'Login successful.' });
});

module.exports = router;
