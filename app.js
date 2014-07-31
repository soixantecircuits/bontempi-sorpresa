var express = require('express'),
    config = require('./config/config')
fs = require('fs');
//var SerialPort = require("serialport").SerialPort;
//var serialport = new SerialPort("/dev/ttyACM1");

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});
var app = express();


//serialport.on('open', function() {
//    console.log('Serial Port Open');
//    serialport.on('data', function(data) {
//        console.log("From Arduino : " + data[0]);
//    });
//});

require('./config/express')(app, config);

app.listen(process.env.PORT || 5000);