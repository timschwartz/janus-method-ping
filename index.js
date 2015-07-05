var args   = require('optimist').argv;
var config = require(args.config || '../../config.js');

function Plugin() {
    console.log("Loading janus-method-ping");
    log.info("Loading janus-method-ping");
}

Plugin.prototype.call = function(data) {
    data._session.send("pong", {message: data.message});
}

module.exports = new Plugin();
