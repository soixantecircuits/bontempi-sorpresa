var express = require('express'),
    config = require('./config/config')
fs = require('fs');


var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});
var app = express();

require('./config/express')(app, config);

app.listen(process.env.PORT || 5000);