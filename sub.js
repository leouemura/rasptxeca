let mqtt = require('mqtt')
let client = mqtt.connect('mqtt://localhost:1883')
let topic = 'topic01'

client.on('message', (topic, message) => {
  message = message.toString()
  console.log(message)
})

client.on('connect', () => {
  client.subscribe(topic)
})