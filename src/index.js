const express = require('express');
const routes = require('./routes');
const connection = require('./database/connection');

console.log('Rodando...')

const app = express()
app.use(express.json());
app.use(routes);

app.listen(3333);

setInterval(async () => {
  try {

    //buscar horario
    let date_obj = new Date();
    let day = date_obj.getDay();
    let hour = date_obj.getHours();
    let minute = date_obj.getMinutes();
    let second = date_obj.getSeconds();

    // console.log('date_obj', date_obj.split('').slice(0,date_obj.length))
    const timestamp = date_obj
    console.log(timestamp)

    const actions = await connection('actions').select('*').where('timestamp', timestamp)
    // .orderBy('timestamp','desc')
    console.log('actions: ', actions)

    if(actions.length !==0){
      const devices = await connection('devices').select('*').where('name', actions.action)
      //pegar frequency
      const frequency = actions[0].frequency
      //pegar Tópico da tabela Devices
      const topic = devices[0].topic
      //publish to topic
      console.log(frequency, topic)
    }


  }
  catch (err) {
    console.log(err)
  }
}, 7000)