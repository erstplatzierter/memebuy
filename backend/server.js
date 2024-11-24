// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Update this if your frontend is hosted elsewhere
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(helmet());

// Import Routes
const authRoutes = require('./routes/auth');

// Use Routes
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Memebuy Backend is Running');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
