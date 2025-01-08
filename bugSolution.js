const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  //Further Input Sanitization if necessary
  // ... further processing ...
  res.status(201).json({ message: 'User created', user });
}).catch(err => {
  console.error(err);
  res.status(500).json({ error: 'Failed to create user' });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});