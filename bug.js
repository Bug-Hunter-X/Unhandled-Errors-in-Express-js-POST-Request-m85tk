const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing crucial error handling for incomplete or invalid requests
  // ... further processing ...
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});