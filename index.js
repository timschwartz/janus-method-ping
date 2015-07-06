function Plugin() {
    console.log("Loading janus-method-ping");
    log.info("Loading janus-method-ping");
}

Plugin.prototype.call = function(data) {
    var from = data._userList[data._userId];
    from.send("pong", {message: data.message});
}

module.exports = new Plugin();
