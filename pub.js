let mqtt = require('mqtt')
let client = mqtt.connect('mqtt://localhost:1883')

let topic = 'topic01'
message = 'mensagem do topic01'

client.on('connect', () => {
  setInterval(()=>{
    client.publish(topic, message)

    console.log('Publicando mensagem...', message)
  }, 5000)
})