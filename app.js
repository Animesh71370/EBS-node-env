const express = require('express');
const path = require('path');

const app = express();

// Use the port provided by Elastic Beanstalk or default to 3000
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/reservation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'reservation.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
