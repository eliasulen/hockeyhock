const express = require('express');
const path = require('path');
const app = express();

var appName = 'hockeyhock'
var customHost = 'https://hh.eliasulen.se' //Empty if none
var customHostProtocol = 'https://'
var standard = 'herokuapp'

// Http -> Https redirect and custom domain redirect
app.use((req, res, next) => {
  var host = customHost ? customHost : req.header('host')

  if(customHost && req.header('host').includes(standard))
  {
    res.redirect(`${customHostProtocol}${host}${req.url}`) //Standard -> 
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