const express = require('express');
const path = require('path');
const app = express();

// Http -> Https redirect
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`)
  } else {
    next();
  }
});

// Serve static files....
app.use(express.static(__dirname + '/dist/hockeyhock'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/hockeyhock/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);