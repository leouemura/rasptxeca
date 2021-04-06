const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create(req,res){
    const {
      action,
      timestamp,
      frequency
    } = req.body

    const id = crypto.randomBytes(4).toString('HEX');
    try{
      const respCreateActions = await connection('actions').insert({id, action, frequency, timestamp})
      return res.json({id, action, timestamp})
    }
    catch(error){
      console.log(error)
    }

  },

  async index(req,res){
    try{
      const respIndexActions = await connection('actions').select('*')
      return res.json(respIndexActions)
    }
    catch(error){
      console.log(error)
    }
  }
}