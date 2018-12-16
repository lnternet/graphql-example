var express = require('express');

//*********** Server setup ************
var port = process.env.PORT || 3000;
var app = express();
app.listen(port, function () {
 console.log('Server started...');
});

//********** Endpoints ****************
app.post('/ping', function(req, res) {
  res.status(200).send('pong');
})
