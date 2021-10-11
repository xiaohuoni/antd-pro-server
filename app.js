var express = require("express");
var morgan = require('morgan')
var {resData} = require("./mock/proxy");
var app = express();
app.use(morgan('combined'))
app.use((req, res) => {
  var result = resData[req.method][req.url];
  if (Object.prototype.toString.call(result) === "[object String]"||Object.prototype.toString.call(result) === "[object Array]") {
    res.json(result)
  } else if (Object.prototype.toString.call(result) === "[object Function]") {
    result(req, res);
  }
});
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
