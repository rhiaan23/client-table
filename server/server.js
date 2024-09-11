const express = require('express');
const db = require('./src/db/database');
const app = express();

// api for fetching users
app.get('/api/users', (req, res) => {
  const stmt = db.prepare('SELECT * FROM users');
  const users = stmt.all();
  res.json(users);
});

// api for fetching transactions for a user
app.get('/api/transactions', (req, res) => {
  const userId = req.query.userId;
  const stmt = db.prepare('SELECT * FROM transactions WHERE user_id = ?');
  const transactions = stmt.all(userId);
  res.json(transactions);
});

app.listen(5000, () => {console.log("Server running on port 5000")});
 