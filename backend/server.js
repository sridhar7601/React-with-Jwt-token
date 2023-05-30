const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const secretKey = 'yourSecretKey'; // Replace with your own secret key

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.post('/login', (req, res) => {
  // Simulating user authentication
  const { username, password } = req.body;

  // You can implement your own user authentication logic here
  if (username === 'admin' && password === 'admin123') {
    // User is authenticated
    const token = jwt.sign({ username }, secretKey);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data' });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
