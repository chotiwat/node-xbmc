// Generated by CoffeeScript 1.10.0
(function() {
  var TCPConnection, XbmcApi, config, connection, ref, xbmcApi;

  ref = require('..'), TCPConnection = ref.TCPConnection, XbmcApi = ref.XbmcApi;

  config = require('./config');

  connection = new TCPConnection({
    host: config.connection.host,
    port: config.connection.port,
    verbose: false
  });

  xbmcApi = new XbmcApi({
    silent: false,
    connection: connection
  });

  xbmcApi.player.stop();

}).call(this);
