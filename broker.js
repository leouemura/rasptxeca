let mosca = require('mosca')
let setting = {port:1883}
let broker = new mosca.Server(setting)


broker.on('ready', () => {
  console.log("Broker Ready!")
})

broker.on('published', (msg) => {
  message = msg.payload.toString()
  console.log("BROKER MESSAGE:")
  console.log(message)
})