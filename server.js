/*eslint new-cap:0 */
'use strict';
var path = require('path');
var express = require('express');
var useragent = require('express-useragent');
var app = express();
var http = require('http').Server(app);

var options = {
    port: process.env.VCAP_APP_PORT || 3000
};

app.use(useragent.express());
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res) {
    if(req.useragent.isiPad || req.useragent.isiPod || req.useragent.isiPhone) {
        console.log('You sir, are a Apple lover!');
    } else if (req.useragent.isAndroid) {
        console.log('Hi there, still using Android?');
    } else if (req.useragent.isLinux) {
        console.log('I cant help you');
    }
    res.send(req.useragent);
});

http.listen(options.port);
