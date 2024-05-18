const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Secret key for JWT token signing (replace with your own secret)
const JWT_SECRET = 'your-secret-key';

// Dummy user data (replace with your database)
const users = [
  { id: 1, username: 'user1', password: 'password1', collectedBottles: 0, rewardsPoints: 0 },
  { id: 2, username: 'user2', password: 'password2', collectedBottles: 0, rewardsPoints: 0 }
];

// Authentication middleware
const authenticateUser = (req, res, next) => {
  // Get the JWT token from the request headers
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'Token not provided' });
  }
};

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match a user in the database
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate a JWT token
    const token = jwt.sign({ user: { id: user.id, username: user.username } }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected endpoint to fetch user data
app.get('/api/user', authenticateUser, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Protected endpoint to collect a bottle
app.post('/api/collectBottle', authenticateUser, (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.user.id);
  if (userIndex !== -1) {
    users[userIndex].collectedBottles++;
    users[userIndex].rewardsPoints++;
    res.json({ message: 'Bottle collected successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Protected endpoint to redeem points
app.post('/api/redeemPoints', authenticateUser, (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.user.id);
  if (userIndex !== -1 && users[userIndex].rewardsPoints >= 10) {
    users[userIndex].rewardsPoints -= 10;
    res.json({ message: 'Points redeemed successfully' });
  } else {
    res.status(400).json({ message: 'Insufficient points' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
