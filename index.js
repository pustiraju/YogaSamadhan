const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/courses', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://127.0.0.1:3000');
});
