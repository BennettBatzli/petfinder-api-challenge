var express = require('express');
var app = express();
var path = require('path');



//app.get('/data', function(req, res) {
//  res.send({message: 'hello'});
//});
//
//app.post('/data/:number', function(req, res) {
//  res.send(req.params.number);
//});


app.get('/*', function(req, res){
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, './public/', file))
});

app.use(express.static('server/public'));
app.use(express.static('server/public/views'));
app.use(express.static('server/public/scripts'));
app.use(express.static('server/public/styles'));
app.use(express.static('server/public/vendors'));


app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function(){
  console.log('Listening on port: ' + app.get('port'));

});

module.exports = app;