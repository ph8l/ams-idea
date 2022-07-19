var express = require("express");
var app = express();
var port = process.env["PORT"] || 5555;

app.use(express.static(__dirname + '/build'));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
})