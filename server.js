const express = require('express');
const path = require('path');
const app = express();

var appName = 'hockeyhock'
var customHost = 'hh.eliasulen.se' //Empty if none
var standardHost = 'herokuapp'

// Http -> Https redirect and custom domain redirect
app.use((req, res, next) => {
  var host = customHost ? customHost : req.header('host')

  if(customHost && req.header('host').includes(standardHost))
  {
    res.redirect(`https://${host}${req.url}`) //Standard -> CustomHost
  }
  else if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${host}${req.url}`) //Http -> Https
  } 
   else {
    next();
  }
});

// Serve static files....
app.use(express.static(__dirname + `/dist/${appName}`));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + `/dist/${appName}/index.html`));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);