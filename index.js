const express = require('express');
const app = express();
const path = require('path');

// Serve static files from "public" folder
app.use(express.static('public'));

// Serve index.html from views folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
