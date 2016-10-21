var app = require('http').createServer(handler),
     io = require('socket.io').listen(app),
     fs = require('fs'),
   five = require('johnny-five');
var EtherPort = require("etherport");
var webSocket = require('ws'),
    ws = new webSocket('ws://82.7.94.205:3030');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


var board = new five.Board({
  port: new EtherPort(3030)
});

board.on("ready", function() {
  var led = new five.Led(9);
ws.on('message', function( data, flags) {
  io.sockets.on('connection', function (socket) {

      socket.on('click', function () {
        console.log('clicked');
        led.toggle();
      });
    })
  });
});
