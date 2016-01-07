module.exports = {}

mods = [
  require './XbmcApi'
  require './TCPConnection'
  require './Player'
  require './Input'
  require './Handlers'
  require './Media'
  require './Notifications'
]

for mod, i in ['XbmcApi', 'TCPConnection', 'Player', 'Input', 'Handlers', 'Media', 'Notifications']
  module.exports[mod] = mods[i]

module.exports.pubsub = require './PubSub'
