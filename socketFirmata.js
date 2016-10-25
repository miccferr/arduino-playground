'use strict'

var app = require('http').createServer(handler),
  io = require('socket.io').listen(app),
  fs = require('fs'),
  five = require('johnny-five'),
  EtherPort = require("etherport"),
  net = require('net'),
  firmata = require('firmata');
// new webSocket('ws://82.7.94.205:3030');

var options = {
  host: '82.7.94.205',
  // host: '192.168.0.8',
  port: '3030'
}

app.listen(8080);

function handler(req, res) {
  fs.readFile(__dirname + '/index.html',
    function(err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200);
      res.end(data);
    });
}


net.connect(options, function() {
  var socketClient = this;
  //we can use the socketClient instead of a serial port as our transport
  var io = new firmata.Board(socketClient)

  io.once('ready', function() {
    console.log('io ready')

    io.isReady = true

    var board = new five.Board({
      port: new EtherPort(3030)
    });

    board.on("ready", function() {
      var led = new five.Led(9);

      io.sockets.on('connection', function(socket) {

        socket.on('click', function() {
          console.log('clicked');
          led.toggle();
        });
      })

    });

  })

})
//
