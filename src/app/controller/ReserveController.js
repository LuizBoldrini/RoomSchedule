const Reserve = require("../models/Reserve")
const moment = require('moment')

class ReserveController {
  async createReserve(req, res) {
    const reqBody = req.body
    try {
      const createReserves = await Reserve.create(reqBody) 
      const listall = await Reserve.find({}).then(function(reserve){
       
        return res.render("index", {reserves: reserve, moment: moment})
      })
      
    } catch (error) {
      return res.send(error)
    }
  }

  async pageInit(req, res) {

    try{
     const listall = await Reserve.find({}).then(function(reserve){
       
       return res.render("index", {reserves: reserve, moment: moment})
     })

    } catch(error){
      return res.send(error)
    }
  }
}

module.exports = new ReserveController()
