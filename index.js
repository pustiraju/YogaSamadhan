const express = require('express');
const path = require('path');
const app = express();

// View engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static assets from public/
app.use(express.static(path.join(__dirname, 'public')));

// Homepage (static HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// EJS pages
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Block access to .git, node_modules, etc.
app.use((req, res, next) => {
  if (req.url.includes('.git') || req.url.includes('node_modules')) {
    return res.status(403).send('Access Denied');
  }
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
