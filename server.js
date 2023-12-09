// server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a user schema
const userSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  avatar: String,
  domain: String,
  available: Boolean,
});

// Create a User model for the 'mockdata' collection
const User = mongoose.model('User', userSchema, 'mockdata');

// Middleware for handling CORS
app.use(cors());

// API endpoint to fetch users from the 'mockdata' collection
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Default route for unmatched paths
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
