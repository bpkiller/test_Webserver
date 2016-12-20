var express = require('express');
var app = express();
var port = 80;
var middleware = require('./middleware.js');
app.use(middleware.logger);
// app.use(middleware.requireAuthentication);
// app.get('/',function(req,res) {
//   res.send('Hello Express!');
// });
//
app.get('/about',middleware.requireAuthentication,function(req,res) {
  res.send('<h1>About Us</h1>');
});
app.use(express.static(__dirname+'/public'));
app.listen(port,function() {
  console.log('Express server started! port:'+port);
});
